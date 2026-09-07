import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found page-width light-hero">
      <div>
        <p className="kicker" style={{ justifyContent: "center" }}>404</p>
        <h1>This path does not lead anywhere.</h1>
        <p>The page you were looking for has moved or never existed. Everything else is still here.</p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <Link className="button button-solid" href="/">Back to the beginning <span aria-hidden="true">↗</span></Link>
          <Link className="button button-ghost" href="/retreats">Browse retreats</Link>
        </div>
      </div>
    </main>
  );
}
