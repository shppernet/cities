"use client";
import Link from "next/link";
import * as React from "react";
import BackArrowIcon from "@/icons/buttons/backarrow.svg";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/helpers/utills";
export interface ISecondaryNavbarProps {
  title: string;
  noButton?: boolean;
  className?: string;
}

export default function SecondaryNavbar(props: ISecondaryNavbarProps) {
  const localActive = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const changeLanguge = (lang: string) => {
    startTransition(() => {
      // Split the current pathname by "/" to get the segments
      const pathSegments = pathname.split("/").filter(Boolean);

      // Replace the language segment with the new language
      pathSegments[0] = lang;

      // Reconstruct the path with the updated language segment
      const newPath = `/${pathSegments.join("/")}`;
      router.replace(newPath);
    });
  };
  return (
    <nav className="max-w-[1350px] mx-auto w-full md:px-12 sm:px-5 ">
      <div className="flex  items-center justify-between text-black pb-5 pt-10">
        <Link
          href={"/"}
          className="flex items-center text-[18px] gap-2 p-3 text-black font-bold rounded-xl cursor-pointer hover:scale-[102%]  transition-all ease-in-out"
        >
          <BackArrowIcon className="w-5 h-5" />
          <span>Back</span>
        </Link>
        <h1
          className={cn(
            "text-xl sm:text-[36px] sm:whitespace-nowrap  lg:text-[44px] text-center font-semibold justify-self-center  ",
            props.className
          )}
        >
          {props.title}
        </h1>

        <div className="flex items-center text-xs md:text-base">
          {!props.noButton ? (
            <>
              <div
                className={`flex justify-center items-center py-1 sm:py-2 sm:pr-5 pr-3 pl-5 sm:pl-7  rounded-l-full transition-all duration-300 ease-in cursor-pointer ${
                  localActive == "en" ? "bg-[#1F3043] text-white" : "bg-white"
                }`}
                onClick={() => changeLanguge("en")}
              >
                EN
              </div>
              <div
                className={`py-3 sm:py-4 md:py-5 pl-2 sm:pl-3 pr-7 sm:pr-10 relative  rounded-r-full transition-all duration-300 ease-in cursor-pointer
          
          ${localActive == "ar" ? "bg-[#1F3043] text-white" : "bg-white"}`}
                onClick={() => changeLanguge("ar")}
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  عربي
                </span>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </nav>
  );
}
