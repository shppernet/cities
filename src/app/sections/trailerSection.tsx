"use client";
import * as React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import { motion } from "framer-motion";
import {
  youtubeThumbnailLink,
  youtubeTrailerLink,
} from "@/helpers/socialLinks";
import { useLocale, useTranslations } from "next-intl";
export interface ITrailerSectionProps {}

export default function TrailerSection(props: ITrailerSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("Video");
  return (
    <motion.div
      className="xl:p-10 flex items-center justify-center gap-5 flex-col  flex-wrap
    w-full h-min relative
    "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="flex flex-col items-center flex-wrap gap-10 
      max-w-full w-min h-min flex-start overflow-visible relative
      "
      >
        <div className="flex flex-col  break-words whitespace-pre-wrap">
          <h1 className="text-2xl md:text-[38px] md:leading-[38px] font-semibold text-center leading-[29px] text-[#333333]">
            {t("title")}
          </h1>
        </div>
        <div>
          <ReactPlayer
            light={youtubeThumbnailLink}
            url={youtubeTrailerLink}
            className="relative !w-[336px] !h-[228px]  md:!w-[714px] md:!h-[380px] xl:!w-[950px] xl:!h-[538px]"
          />
        </div>
      </div>
    </motion.div>
  );
}
