"use client";

import * as React from "react";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export interface IContactInfoSectionProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  action_description: string;
  buttonText: string;
}

export default function ContactInfoSection(props: IContactInfoSectionProps) {
  const pathName = usePathname();
  const router = useRouter();

  const [isModal, setIsModal] = React.useState(false);

  return (
    <div className="flex h-full  justify-start bg-white pt-30 mt-auto">
      <div className="mx-auto w-full max-w-2xl  p-2 sm:p-6 flex flex-col justify-center items-center gap-3  ">
        <h1 className="text-3xl font-semibold pb-5 pt-10 whitespace-nowrap text-center">
          {props.title}
        </h1>

        <p>{props.subtitle1}</p>

        <p>{props.subtitle2}</p>

        <p className="pt-10">{props.action_description}</p>

        <a
          onClick={() => setIsModal(true)}
          href="mailto:info@shpper.net"
          className="mt-7 mb-20 p-3 font-medium w-full text-center bg-[#1f3043] rounded-full text-white hover:scale-[102%] transition-all ease-in-out hover:bg-[#1f3043]/90"
        >
          {props.buttonText}
        </a>

        {/* modal */}
        {!isModal ? null : (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
              <div className="w-full">
                <div className="m-8 my-20 max-w-[400px] mx-auto">
                  <div className="mb-8 text-center text-[#1f3043]">
                    <h1 className="mb-4 text-3xl font-extrabold ">
                      Thank you for choosing Shpper!
                    </h1>
                    <p className="text-gray-600">
                      We are excited to connect with you.
                    </p>
                  </div>
                  <div className="space-y-4 ">
                    <button
                      className="p-3  rounded-full text-white w-full font-semibold bg-[#1f3043] hover:bg-[#1f3043]/90 hover:scale-[102%] transition-all ease-in-out"
                      onClick={() => setIsModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
