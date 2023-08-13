import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="capitalize text-3xl text-center">
        Welcome to Texas Southwest First
        <br />
        Ecclesiastical Jurisdiction
      </h2>
      <Link
        className=" px-6 py-3 uppercase border-4 rounded-sm border-zinc-50 text-xl font-bold hover:bg-yellow-500 hover:border-yellow-500 transition-colors"
        href="/watch"
      >
        watch
      </Link>
    </div>
  );
}
