import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen content-center">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-6xl bg-gradient-to-r from-apple-dark to-apple-light bg-clip-text text-transparent w-fit">
          CSS Animation timeline
        </h1>
        <ul>
          <li>
            <Link href={"/plain"}>Plain</Link>
          </li>
          <li>
            <Link href={"/tailwindcss"}>Tailwind CSS</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
