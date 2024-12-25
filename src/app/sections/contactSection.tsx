"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import InstraIcon from "@/icons/social/instragram.svg";
import YoutubeIcon from "@/icons/social/youtube.svg";
import FbIcon from "@/icons/social/facebook.svg";
import SnapIcon from "@/icons/social/snapchat.svg";
import {
  instagramLink,
  youtubeLink,
  facebookLink,
  snapchatLink,
  playStoreLink,
  appStoreLink,
  shopLink,
} from "@/helpers/socialLinks";
import { useLocale, useTranslations } from "next-intl";
export interface IContactSectionProps {}

export default function ContactSection(props: IContactSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("footer");
  return (
    <section className="flex  justify-center gap-6 py-8 items-center">
      <div className="flex flex-col  justify-center gap-6 py-8 max-w-[1200px] w-full">
        {/* title */}
        <div className="flex items-center justify-center flex-nowrap  gap-[10px] ">
          <div
            className="bg-gradient-to-r from-black to-transparent 
       flex-1 opacity-30 overflow-hidden relative w-[1px] h-[1px]"
          ></div>
          <Image
            src={"/icons/shpper_logo.svg"}
            width={86}
            height={24}
            alt="logo"
          />
          <div
            className="bg-gradient-to-l from-black to-transparent 
       flex-1 opacity-30 overflow-hidden relative w-[1px] h-[1px]"
          ></div>
        </div>
        {/* details */}
        <div className="flex flex-col xl:flex-row gap-6  items-center justify-center flex-nowrap px-8 xl:justify-around ">
          {/* address */}
          <div className="flex flex-col gap-4 flex-nowrap text-xs xl:self-start xl:mt-[3rem] order-1  xl:order-none">
            <div className="flex flex-col flex-nowrap gap-[10px]">
              <div className="flex flex-nowrap gap-[10px] justify-center text-center xl:text-start items-start order-3  xl:order-none">
                <Image
                  src={"/icons/location-pin-svgrepo-com.svg"}
                  width={20}
                  height={20}
                  alt="location"
                />
                <div className="flex flex-col text-md leading-[150%] text-[#1E1515]">
                  <p className="">SHPPER SOFTWARE DESIGN FZCO</p>
                  <p className="mr-[2rem] xl:mr-0">Dubai Silicon Oasis</p>
                  {/*    <p className="">IFZA Business Park, DDP</p> */}
                  <p className="mr-[2rem] xl:mr-0">Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-nowrap gap-[10px]  items-center">
              <Image
                src={"/icons/mail_icon.svg"}
                width={20}
                height={20}
                alt="location"
              />
              <div className="flex flex-col text-md leading-[150%] text-[#1E1515]">
                <p className="">Email: info@shpper.net</p>
              </div>
            </div> */}
            {/*  <div className="flex flex-nowrap gap-[10px]  items-center">
              <Image
                src={"/icons/phone_icon.svg"}
                width={20}
                height={20}
                alt="location"
              />
              <div className="flex flex-col text-md leading-[150%] text-[#1E1515]">
                <p className="">Phone: +971501902914</p>
              </div>
            </div> */}
          </div>
          {/* page links */}
          <div
            className="flex flex-col flex-nowrap gap-[10px] justify-center
        text-sm leading-[18px] text-[#828289] xl:pr-[7rem] tracking-[-0.3px] whitespace-nowrap
        "
          >
            <div className="flex gap-4 items-center justify-center md:font-medium text-sm md:text-base ">
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/about-us`}
              >
                {t("about_us")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/contact-us`}
              >
                {t("contact_us")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/faq`}
              >
                {t("faqs")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={shopLink}
              >
                {t("shop")}
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center  md:font-medium text-sm md:text-base flex-wrap">
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/privacy-policy`}
              >
                {t("privacy")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/communication-policy`}
              >
                {t("communication")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/cookie-policy`}
              >
                {t("cookie")}
              </Link>
              <Link
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                href={`/${localActive}/terms-conditions`}
              >
                {t("terms")}
              </Link>
            </div>
          </div>
          {/* socials */}
          <div className="flex flex-col gap-6 xl:pt-8">
            <div className="flex flex-col items-center flex-nowrap gap-4">
              <div className="flex flex-col items-center flex-nowrap gap-6">
                <div className="flex flex-col flex-nowrap gap-[10px] justify-center items-center">
                  <p className="text-sm font-bold leading-[150%] text-[#1F3043]">
                    {t("follow_us")}
                  </p>
                  <div className="flex items-center justify-center gap-[10px]">
                    <Link href={instagramLink} className="cursor-pointer ">
                      <InstraIcon className="w-5 h-5 fill-[#303036] hover:fill-orange-500 transition-all ease-in-out" />
                    </Link>
                    <Link
                      href={youtubeLink}
                      className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                    >
                      <YoutubeIcon className="w-6 h-6 fill-[#303036] hover:fill-red-500" />
                    </Link>
                    {/*    <Link href={facebookLink} className="cursor-pointer  ">
                      <FbIcon className="w-5 h-5 fill-[#303036] hover:fill-blue-600 transition-all ease-in-out" />
                    </Link> */}
                    {/*  <Link href={snapchatLink} className="cursor-pointer ">
                      <SnapIcon className="w-5 h-5 fill-[#303036] hover:fill-yellow-500  transition-all ease-in-out" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-nowrap gap-[10px] justify-center items-center">
              <h5 className="font-bold text-sm leading-8 text-[#1f3043]">
                {t("get_the_app")}
              </h5>
              <div className="flex flex-col flex-nowrap gap-[15px] justify-center items-center">
                <Link
                  href={playStoreLink}
                  className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                >
                  <Image
                    src="/images/google-play-badge.svg"
                    alt="playStore"
                    height={30}
                    width={102}
                  />
                </Link>
                <Link
                  href={appStoreLink}
                  className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
                >
                  <Image
                    src="/images/appstore.svg"
                    alt="playStore"
                    height={30}
                    width={102}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
