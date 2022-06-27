import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <p>This is the about page</p>
      <h2>
        Go to
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
}
