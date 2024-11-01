"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { appStoreLink, playStoreLink } from "@/helpers/socialLinks";
import { useLocale, useTranslations } from "next-intl";
import PrimaryNavbar from "@/components/Navbar/primaryNavbar";
import { cn } from "@/helpers/utills";

export interface IHeaderSectionProps {}

export default function HeaderSection(props: IHeaderSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("landing");

  // Define motion variants based on the condition
  const imageVariants =
    localActive === "ar"
      ? {
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }
      : {
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        };
  const textVariants =
    localActive === "ar"
      ? {
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }
      : {
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        };

  /* {t("title")} */
  return (
    <header
      className="flex  flex-col items-center  gap-10 py-4 w-full  
  bg-[url('/images/cloud_bg.webp')] bg-no-repeat bg-cover bg-center
  "
    >
      <PrimaryNavbar />
      {/* contents */}
      <div className="flex flex-col md:pl-[5rem] md:flex-row-reverse items-center justify-center md:pb-0 pb-10">
        {/* image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          className={localActive == "ar" ? "md:order-1" : ""}
        >
          <Image
            src="/images/hero_23.png"
            alt="appScreens"
            width={601}
            height={538}
            className="w-[380px] h-[336px] xl:w-[601px] xl:h-[538px] ml-[2rem]  md:ml-[0px]"
          />
        </motion.div>
        <motion.div
          className="flex flex-col  items-center max-w-[372px] xl:max-w-[450px]  gap-[10px] xl:gap-8 justify-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
          <div
            className={`flex justify-center items-center flex-col gap-[10px] `}
          >
            <div className="flex flex-col w-[59%] md:w-full break-words">
              <h1
                className={cn(`text-2xl md:text-[40px] xl:text-[45px] md:leading-[54px] font-extrabold tracking-[-1px] text-center md:text-start text-[#1F3043]
                ${localActive == "ar" ? "md:text-right " : ""}`)}
                dangerouslySetInnerHTML={{ __html: t("title") }}
              ></h1>
            </div>
            <div
              className={`flex justify-center items-center w-[69%] md:w-full  xl:w-[90%] break-words 
            ${localActive == "ar" ? "md:ml-auto" : "md:mr-auto"}
            `}
            >
              <h2
                className={cn(`text-sm md:text-[15px] xl:text-base text-center md:text-start   md:text-base leading-[1.5em] tracking-[-0.5px] text-[#1F3043]
              ${localActive == "ar" ? " md:text-right" : ""}
              `)}
              >
                {t("description")}
              </h2>
            </div>
          </div>
          <div
            className={cn("w-full flex justify-center md:justify-start", {
              "md:justify-end": localActive == "ar",
            })}
          >
            <div className="flex items-center md:items-start gap-4">
              <Link
                href={playStoreLink}
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
              >
                <Image
                  src="/images/google-play-badge.svg"
                  alt="playStore"
                  height={53}
                  width={180}
                  className="xl:w-[180px] xl:h-[53px]  w-[135px] h-[40px]"
                />
              </Link>
              <Link
                href={appStoreLink}
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
              >
                <Image
                  src="/images/appstore.svg"
                  alt="appStore"
                  height={40}
                  width={160}
                  className="xl:w-[180px] xl:h-[53px]  w-[135px] h-[40px]"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
