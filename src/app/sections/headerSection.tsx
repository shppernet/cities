"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { appStoreLink, playStoreLink } from "@/helpers/socialLinks";
import CloudIcon from "@/icons/logo/cloud_icon.svg";

export interface IHeaderSectionProps {}

export default function HeaderSection(props: IHeaderSectionProps) {
  const texts = [
    `Shpper<span class="text-[#FFD700]">.</span>`,
    `Sh<span class="text-[#FFD700]">o</span>pper<span class="text-[#FFD700]">.</span>`,
    `Sh<span class="text-[#FFD700]">i</span>pper<span class="text-[#FFD700]">.</span>`,
  ];
  const [index, setIndex] = React.useState<number>(0);
  React.useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      setIndex(next % texts.length);
    }, 3 * 1000);
  }, [index, setIndex, texts]);
  return (
    <header
      className="flex  flex-col items-center  gap-10 py-4 w-full  
  bg-[url('/images/cloud_bg.webp')] bg-no-repeat bg-cover bg-center
  "
    >
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
        <div className="relative flex justify-center items-center">
          <div className="absolute text-white w-full flex justify-center items-center">
            <div className="overflow-hidden inline-flex relative w-full  h-[5rem] text-3xl font-bold justify-center items-center mt-5">
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
                  /*  transition={{
              translateY: {
                type: "spring",
                stiffness: 1000,
                damping: 200,
                bounce: 1,
              },
              opacity: { duration: 0.5 },
            }} */
                  transition={{ delay: 1 }}
                  dangerouslySetInnerHTML={{ __html: texts[index] }}
                >
                  {/* {texts[index]} */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <CloudIcon className="md:w-[178px] md:h-[120px] w-[136px] h-[92px] " />
        </div>
        {/* logo */}
        {/* <Image
          src="/images/logo.svg"
          alt="logo"
          width={178}
          height={120}
          className="md:w-[178px] md:h-[120px] w-[136px] h-[92px]"
        /> */}{" "}
      </motion.div>
      {/* contents */}
      <div className="flex flex-col md:pl-[5rem] md:flex-row-reverse items-center justify-center md:pb-0 pb-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
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
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
          <div className="flex justify-center items-center flex-col gap-[10px]">
            <div className="flex flex-col w-[59%] md:w-full break-words">
              <h1 className="text-2xl md:text-[40px] xl:text-[45px] md:leading-[54px] font-extrabold tracking-[-1px] text-center md:text-start text-[#1F3043]">
                Your Global <br /> Personal Shopper
              </h1>
            </div>
            <div className="flex justify-center items-center w-[69%] md:w-full  xl:w-[90%] break-words md:mr-auto">
              <h2 className="text-sm text-[15px] xl:text-base text-center md:text-start   md:text-base leading-[1.5em] tracking-[-0.5px] text-[#1F3043]">
                We connect buyers with trusted travelers. Buy from anywhere, and
                get it delivered by travelers.
              </h2>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
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
