import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloudIcon from "@/icons/logo/cloud_icon.svg";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useMemo } from "react";
export interface IPrimaryNavbarProps {}

export default function PrimaryNavbar(props: IPrimaryNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const localActive = useLocale();
  const [isPending, startTransition] = React.useTransition();
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

  const texts = useMemo(
    () => [
      `Shpper<span class="text-[#FFD700]">.</span>`,
      `Sh<span class="text-[#FFD700]">o</span>pper<span class="text-[#FFD700]">.</span>`,
      `Sh<span class="text-[#FFD700]">i</span>pper<span class="text-[#FFD700]">.</span>`,
    ],
    []
  );

  const [index, setIndex] = React.useState<number>(0);
  React.useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      setIndex(next % texts.length);
    }, 3 * 1000);
  }, [index, setIndex, texts]);

  return (
    <nav className="w-full flex items-center justify-between px-3 sm:px-10">
      <div></div>
      {/* animation */}
      <motion.div
        className="w-full flex justify-center items-center"
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
      >
        <div className="relative flex justify-center items-center pl-[4rem] sm:pl-[6rem]">
          <div className="absolute text-white w-full flex justify-center items-center">
            <div className="overflow-hidden inline-flex relative w-full  h-[5rem] text-xl sm:text-3xl font-bold justify-center items-center mt-5">
              <AnimatePresence initial={false}>
                <motion.div
                  className=" absolute z-10"
                  layout
                  key={index}
                  variants={{
                    enter: {
                      translateY: 100,
                      opacity: 0,
                      height: 0,
                    },

                    center: {
                      zIndex: 10,
                      translateY: 1,
                      opacity: 1,
                      height: "auto",
                    },
                    exit: {
                      zIndex: 0,
                      translateY: -100,
                      opacity: 0,
                      height: 0,
                    },
                  }}
                  initial="enter"
                  animate={"center"}
                  exit="exit"
                  transition={{ delay: 1 }}
                  dangerouslySetInnerHTML={{ __html: texts[index] }}
                ></motion.div>
              </AnimatePresence>
            </div>
          </div>
          <CloudIcon className="md:w-[178px] md:h-[120px] w-[136px] h-[92px] " />
        </div>
      </motion.div>
      <div className="flex items-center text-xs md:text-base">
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
      </div>
    </nav>
  );
}
