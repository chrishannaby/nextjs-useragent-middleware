import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User-Agent redirects</title>
      </Head>
      <h1>User-Agent redirects</h1>
      <Link href="/downloads">
        <a>Go to Downloads</a>
      </Link>
    </div>
  );
}
