import { ButtonLink } from "@/components/ui";
import { SCHOOL } from "@/content/school";

export default function NotFound() {
  return (
    <div className="wrap-narrow py-24 text-center lg:py-32">
      <p className="t-eyebrow text-red">404</p>
      <h1 className="t-h1 mt-4 text-navy">We could not find that page.</h1>
      <p className="t-lead mt-5">
        It may have moved, or the link may be out of date. Try the admissions
        page — that is where most visitors are heading.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/admissions" variant="primary">
          Admissions
        </ButtonLink>
        <ButtonLink href="/" variant="outline">
          Back to home
        </ButtonLink>
        <ButtonLink href={SCHOOL.phone.href} variant="outline" external>
          Call {SCHOOL.phone.display}
        </ButtonLink>
      </div>
    </div>
  );
}
