import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js</h1>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/account">Accounts</Link>
    </main>
  );
}
