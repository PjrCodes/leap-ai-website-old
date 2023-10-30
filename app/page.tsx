import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="/linear_regression_workshop"
        className="underline text-sm md:text-xl text-center"
      >
        Linear Regression Workshop
      </Link>
      <Link
        href="/ml_bytes"
        className="underline text-sm md:text-xl text-center"
      >
        ML Bytes
      </Link>

      <Link
        href="/upcoming_events"
        className="underline text-sm md:text-xl text-center"
      >
        Upcoming Events
      </Link>

      <Link href="/team" className="underline text-sm md:text-xl text-center">
        Team
      </Link>
    </div>
  );
}
