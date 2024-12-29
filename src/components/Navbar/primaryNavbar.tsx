import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloudIcon from "@/icons/logo/cloud_icon.svg";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
import { shopLink } from "@/helpers/socialLinks";
export interface IPrimaryNavbarProps {}

export default function PrimaryNavbar(props: IPrimaryNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
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
        <div className="relative flex justify-center items-center pl-[4rem] sm:pl-[7rem] md:pl-[14rem]">
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
      {/* Hamburger Icon */}
      <button
        className="md:hidden focus:outline-none absolute z-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:inline-flex items-center gap-5 shrink-0 lg:mr-10 md:mr-4  leading-[30px] ${
          localActive == "en" ? "font-medium " : " font-semibold text-[#1F3043]"
        }`}
      >
        <Link
          className="relative z-10  cursor-pointer hover:text-[#D9B705] transition-all ease-in-out"
          href={shopLink}
        >
          <div>{t("shop")}</div>
        </Link>
        <Link
          className=" relative z-10 cursor-pointer hover:text-[#D9B705] transition-all ease-in-out"
          href={`/${localActive}/about-us`}
        >
          {t("about_us")}
        </Link>
      </div>

      {/* Sidebar for Mobile Navigation */}
      <motion.div
        className="fixed inset-y-0 left-0 w-[75%] bg-white shadow-lg z-50 flex flex-col gap-4 p-5 transform md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="self-end p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          href={shopLink}
          className="text-lg font-medium hover:text-[#D9B705] transition-all ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          {t("shop")}
        </Link>
        <Link
          href={`/${localActive}/about-us`}
          className="text-lg font-medium hover:text-[#D9B705] transition-all ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          {t("about_us")}
        </Link>
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
