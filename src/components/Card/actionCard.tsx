import { cn } from "@/helpers/utills";
import { useLocale } from "next-intl";
import Image from "next/image";
import * as React from "react";

export interface IActionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  containerClassName?: string;
}

export default function ActionCard(props: IActionCardProps) {
  const localActive = useLocale();

  return (
    <div
      className={cn(
        `flex flex-col xl:flex-row  flex-wrap gap-[30px] xl:gap-[80px] items-center xl:items-start justify-center w-[365px] md:w-auto`,
        props.containerClassName
      )}
    >
      <div className="relative overflow-hidden rounded-[20px] w-[338px] h-[280px] xl:w-[460px] xl:h-[383px]">
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
        className={cn(
          `flex flex-col flex-nowrap gap-[10px] xl:gap-[20px] w-[330px] md:w-[392px]
          ${localActive == "ar" ? " text-right  w-[330px] md:w-[450px]" : ""}
          `
        )}
      >
        <h2 className="text-xl  md:text-[50px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-[29px] md:leading-[60px] text-[#333333] ">
          {props.title}
        </h2>
        <h3 className="xl:text-2xl xl:leading-[36px] leading-6 tracking-[-0.6px] text-[#888888]">
          {props.description}
        </h3>
      </div>
    </div>
  );
}
