"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
import Marquee from "react-fast-marquee";
export interface ILogoCarosalSectionProps {}

export default function LogoCarosalSection(props: ILogoCarosalSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("logo_carosal");
  return (
    <section className="pt-[50px] pb-[80px] px-10 flex flex-col flex-nowrap items-center justify-center gap-[50px] overflow-hidden">
      <div className="flex flex-nowrap flex-col gap-[50px] items-center">
        <h2 className="text-[25px] leading-[30px] font-medium text-[#1F3043]">
          {t("title")}
        </h2>
        {/* carosal */}

        <Marquee className="max-w-[1200px]" gradient={true}>
          <div className="mx-[50px]">
            <Image
              src={"/brands/amazon.svg"}
              height={66}
              width={67}
              alt="amazon"
            />
          </div>
          <div className="mr-[100px]">
            <Image src={"/brands/esty.svg"} height={84} width={83} alt="esty" />
          </div>
          <div className="mx-[50px]">
            <Image
              src={"/brands/wallmart.svg"}
              height={83}
              width={83}
              alt="wallmart"
            />
          </div>
          <div className="mx-[50px]">
            <Image
              src={"/brands/ebay.svg"}
              height={83}
              width={104}
              alt="ebay"
            />
          </div>
          <div className="mx-[50px]">
            <Image src={"/brands/dior.svg"} height={83} width={84} alt="dior" />
          </div>
          <div className="mx-[50px]">
            <Image src={"/brands/zara.svg"} height={83} width={84} alt="zara" />
          </div>
          <div className="mx-[50px]">
            <Image src={"/brands/ff.svg"} height={45} width={46} alt="ff" />
          </div>
          <div className="mx-[50px]">
            <Image
              src={"/brands/shoppify.svg"}
              height={70}
              width={70}
              alt="ff"
            />
          </div>
          <div className="mx-[50px]">
            <Image
              src={"/brands/aliexpress.svg"}
              height={83}
              width={83}
              alt="aliexpress"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
