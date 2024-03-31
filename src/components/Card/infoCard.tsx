import { cn } from "@/helpers/utills";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
export interface IInfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function InfoCard(props: IInfoCardProps) {
  const localActive = useLocale();

  return (
    <div className="flex flex-col flex-nowrap gap-[30px] justify-center max-w-[300px] xl:max-w-[320px]">
      <div className="relative overflow-hidden rounded-[20px] max-w-[300px] xl:max-w-[320px] h-[250px]">
        <Image
          src={props.imageUrl}
          fill
          objectFit="cover"
          objectPosition="center"
          className="rounded-[20px]"
          priority={true}
          quality={100}
          loading="eager"
          unoptimized={true}
          alt="shopping_request"
        />
      </div>

      {/* details */}
      <div
        className={cn(`flex flex-col flex-nowrap gap-[10px]
      ${localActive == "ar" ? " text-right" : ""}
      `)}
      >
        <h2
          className={cn(
            "lg:text-[22px] lg:leading-[36px] lg:tracking-[-.9px] font-semibold tracking-[-.7px] leading-[1.5em] text-[#001122]",
            {
              "text-xl  md:text-[32px] lg:text-[32px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-[29px] md:leading-[60px] text-[#333333]":
                localActive == "ar",
            }
          )}
        >
          {props.title}
        </h2>
        <h3 className="text-base traking-[0.7px] lg:text-[20px] leading-6   lg:leading-[2rem] text-[#888888]">
          {props.description}
        </h3>
      </div>
    </div>
  );
}
