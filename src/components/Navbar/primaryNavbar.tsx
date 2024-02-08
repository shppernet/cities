import Link from "next/link";
import * as React from "react";

export interface IPrimaryNavbarProps {
  title: string;
  page1: string;
  page2: string;
}

export default function PrimaryNavbar(props: IPrimaryNavbarProps) {
  return (
    <nav>
      <div className="bg-black text-white   pb-5 ">
        <h1 className="text-[44px] text-center font-bold">{props.title}</h1>
        <h2 className=" text-center text-xs font-medium uppercase">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-white/70 transition-all ease-in-out"
          >
            {props.page1}
          </Link>{" "}
          / <span className="font-bold">{props.page2}</span>
        </h2>
      </div>
    </nav>
  );
}
