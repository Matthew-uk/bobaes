import { MongoClient, type Db } from "mongodb";

/**
 * Cached MongoDB connection.
 *
 * Next.js reloads modules on every edit in development, so a fresh MongoClient
 * per reload would leak connections until Atlas refuses new ones. The promise
 * is therefore parked on `globalThis` and reused.
 */

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getUri(): string {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Copy .env.example to .env.local and fill it in.",
    );
  }
  return uri;
}

function getClientPromise(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(getUri(), {
      // Fail fast rather than hanging a form submission for 30s.
      serverSelectionTimeoutMS: 8000,
      retryWrites: true,
    });
    globalForMongo._mongoClientPromise = client.connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(process.env.MONGODB_DB || "bobaes");
}

/** True when the app has been given somewhere to write. */
export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI);
}
