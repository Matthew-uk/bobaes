import "server-only";
import { ObjectId, type Collection } from "mongodb";
import { getDb } from "./mongodb";
import type { ValidEnquiry } from "./validation";

export type EnquiryDoc = ValidEnquiry & {
  _id?: ObjectId;
  /** Which form the enquiry came from, so we can see what converts. */
  source: "admissions" | "footer" | "tour";
  createdAt: Date;
  handled: boolean;
};

/** Shape returned to the admin UI — plain, serialisable. */
export type EnquiryView = Omit<EnquiryDoc, "_id" | "createdAt"> & {
  id: string;
  createdAt: string;
};

const COLLECTION = "enquiries";

let indexesEnsured = false;

async function collection(): Promise<Collection<EnquiryDoc>> {
  const db = await getDb();
  const col = db.collection<EnquiryDoc>(COLLECTION);

  // Created lazily on first use rather than at import time, so a missing
  // database never breaks the build.
  if (!indexesEnsured) {
    indexesEnsured = true;
    try {
      await col.createIndex({ createdAt: -1 });
      await col.createIndex({ handled: 1, createdAt: -1 });
    } catch {
      // A missing index slows the admin list; it must never fail a submission.
      indexesEnsured = false;
    }
  }

  return col;
}

export async function insertEnquiry(
  data: ValidEnquiry,
  source: EnquiryDoc["source"],
): Promise<string> {
  const col = await collection();
  const result = await col.insertOne({
    ...data,
    source,
    createdAt: new Date(),
    handled: false,
  } as EnquiryDoc);
  return result.insertedId.toString();
}

export async function listEnquiries(limit = 200): Promise<EnquiryView[]> {
  const col = await collection();
  const docs = await col
    .find({}, { sort: { createdAt: -1 }, limit })
    .toArray();

  return docs.map(({ _id, createdAt, ...rest }) => ({
    ...rest,
    id: _id!.toString(),
    createdAt: createdAt.toISOString(),
  }));
}

export async function setHandled(id: string, handled: boolean): Promise<void> {
  if (!ObjectId.isValid(id)) return;
  const col = await collection();
  await col.updateOne({ _id: new ObjectId(id) }, { $set: { handled } });
}

export async function countEnquiries(): Promise<{
  total: number;
  unhandled: number;
}> {
  const col = await collection();
  const [total, unhandled] = await Promise.all([
    col.countDocuments({}),
    col.countDocuments({ handled: false }),
  ]);
  return { total, unhandled };
}
