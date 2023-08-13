import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between relative z-20">
      <Link href="/">
        <div>
          <img src="" alt="" />
        </div>
        <p className="uppercase font-light text-2xl">
          texas
          <span className="font-bold">southwest</span>
          first
        </p>
      </Link>
      {/* <div>
        <p className="uppercase">menu</p>
      </div> */}
    </div>
  );
}
