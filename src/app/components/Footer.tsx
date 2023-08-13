import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-row justify-start items-center relative">
      <div>
        <Image src="" alt="filler image" />
      </div>
      <div className="w-1 h-full bg-zinc-50"></div>
      <p className="">
        Site Designed by
        <a
          className="capitalize pl-1 cursor-pointer underline"
          href="http://www.lighthousestreaming.com"
        >
          Lighthouse streaming
        </a>
      </p>
    </section>
  );
}
