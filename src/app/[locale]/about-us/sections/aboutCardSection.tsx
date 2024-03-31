"use client";
import Image from "next/image";
import * as React from "react";
import InstraIcon from "@/icons/social/instragram.svg";
import YoutubeIcon from "@/icons/social/youtube.svg";
import FbIcon from "@/icons/social/facebook.svg";
import SnapIcon from "@/icons/social/snapchat.svg";
import LinkedInIcon from "@/icons/social/linkedin.svg";

import {
  instagramLink,
  youtubeLink,
  facebookLink,
  snapchatLink,
  playStoreLink,
  appStoreLink,
  linkedinLink,
} from "@/helpers/socialLinks";
import Link from "next/link";
export interface IAboutCardSectionProps {}

export default function AboutCardSection(props: IAboutCardSectionProps) {
  return (
    <section className="flex justify-center items-center    mb-20 max-w-[1350px] mx-auto mt-20 px-6">
      <div className="flex flex-col  justify-center items-start gap-10 ">
        <div className=" relative max-w-[680px] w-full h-[347px]  flex-shrink-[0] ">
          <Image
            src={"/card/plains.jpg"}
            fill
            alt="plains"
            className="w-full rounded-lg"
          />
          {/* <Image
          src={"/card/plains.jpg"}
           fill
          objectFit="cover"
          objectPosition="center"
          priority={true}
          quality={100}
          loading="eager"
          unoptimized={true}
          alt="shopping_request"
        /> */}
        </div>
        <div className=" ">
          <div className="max-w-[680px]">
            <p className="text-xl leading-9 text-[#777777]">
              Shpper is a P2P platform revolutionizing personalized shipping &
              shopping. We connect individuals seeking to send or receive items
              with travelers acting as couriers and leveraging daily flights
              worldwide as our delivery fleet. In addition to shipping, our
              shopping feature streamlines supply & demand with a marketplace
              where we empower individuals to act as personal shoppers,
              showcasing items from their destinations for purchase requests.
              Our platform aims to create a borderless market. Our vision is to
              transform the global shipping and shopping industry with an
              affordable, eco-friendly platform.
            </p>
            <hr className="w-full bg-white/80 my-4 h-1 hidden" />
            <div className=" gap-3 items-center hidden">
              <Link href={instagramLink} className="cursor-pointer ">
                <InstraIcon className="w-5 h-5 fill-[#303036] hover:fill-orange-500 transition-all ease-in-out" />
              </Link>
              <Link
                href={youtubeLink}
                className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
              >
                <YoutubeIcon className="w-6 h-6 fill-[#303036] hover:fill-red-500" />
              </Link>
              <Link href={facebookLink} className="cursor-pointer  ">
                <FbIcon className="w-5 h-5 fill-[#303036] hover:fill-blue-600 transition-all ease-in-out" />
              </Link>
              <Link href={snapchatLink} className="cursor-pointer ">
                <SnapIcon className="w-5 h-5 fill-[#303036] hover:fill-yellow-500  transition-all ease-in-out" />
              </Link>
              <Link href={linkedinLink} className="cursor-pointer ">
                <LinkedInIcon className="w-5 h-5 fill-black hover:fill-blue-500 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
