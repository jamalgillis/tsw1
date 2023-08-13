export default function Footer() {
  return (
    <div className="flex flex-row justify-start items-center relative">
      <div>
        <img src="" alt="" />
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
    </div>
  );
}
