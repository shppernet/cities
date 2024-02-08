import Image from "next/image";
import * as React from "react";
export interface IInfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function InfoCard(props: IInfoCardProps) {
  return (
    <div className="flex flex-col flex-nowrap gap-[30px] justify-center max-w-[300px] xl:max-w-[320px]">
      <div className="relative overflow-hidden rounded-[20px] max-w-[300px] xl:max-w-[320px] h-[250px]">
        <Image
          src={props.imageUrl}
          layout="fill"
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
      <div className="flex flex-col flex-nowrap gap-[10px] ">
        <h2 className=" lg:text-[22px] lg:leading-[36px] lg:tracking-[-.9px] font-semibold tracking-[-.7px] leading-[1.5em] text-[#001122]">
          {props.title}
        </h2>
        <h3 className="text-base traking-[0.7px] lg:text-[20px] leading-6   lg:leading-[2rem] text-[#888888]">
          {props.description}
        </h3>
      </div>
    </div>
  );
}
