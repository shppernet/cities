"use client";
import Link from "next/link";
import * as React from "react";
import BackArrowIcon from "@/icons/buttons/backarrow.svg";
export interface ISecondaryNavbarProps {
  title: string;
}

export default function SecondaryNavbar(props: ISecondaryNavbarProps) {
  return (
    <nav className="max-w-[1350px] mx-auto w-full">
      <div className="flex  items-center justify-between text-black pb-5 pt-10">
        <Link
          href={"/"}
          className="flex items-center text-[18px] gap-2 p-3 text-black font-bold rounded-xl cursor-pointer hover:scale-[102%]  transition-all ease-in-out"
        >
          <BackArrowIcon className="w-5 h-5" />
          <span>Back</span>
        </Link>
        <h1 className="text-[36px] whitespace-nowrap lg:text-[44px] text-center font-semibold justify-self-center pr-[5rem] sm:pr-[6rem]">
          {props.title}
        </h1>
        <div></div>
      </div>
    </nav>
  );
}
