"use client";
import * as React from "react";
import { useState } from "react";
import CrossIcon from "@/icons/buttons/cross.svg";

export interface IAccordionDropdownProps {
  title: string;
  answer: string;
}

export default function AccordionDropdown(props: IAccordionDropdownProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={` shadow-accordion rounded-[24px] ${
        accordionOpen ? "py-2" : ""
      }`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full font-semibold 
        hover:text-[#00bef2] transition-all ease-in-out
       
        p-5 ${accordionOpen ? "text-[#00bef2]" : "text-black"}`}
      >
        <span className="text-start">{props.title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        {/* <CrossIcon className="fill-[#bbb] shrink-0 ml-8" /> */}
        {/* <svg
          className="fill-[#bbb] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg> */}
        <CrossIcon
          className={`w-[14px] h-[14px] stroke-[#bbb] shrink-0 ml-8 
        rotate-45 transition duration-200 ease-out ${
          accordionOpen && "-rotate-180"
        }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-[#54595f] font-normal text-[15px]  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 font-[400]">{props.answer}</div>
      </div>
    </div>
  );
}
