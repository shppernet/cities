"use client";
import InfoCard from "@/components/Card/infoCard";
import * as React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export interface IInfoCardSectionProps {}

export default function InfoCardSection(props: IInfoCardSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("infoCards");
  return (
    <section className="flex flex-col md:flex-row  flex-nowrap justify-center items-center md:items-start gap-[54px]">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <InfoCard
          title={t("card1_title")}
          description={t("card1_description")}
          imageUrl={"/card/shopping_request.jpg"}
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <InfoCard
          title={t("card2_title")}
          description={t("card2_description")}
          imageUrl={"/card/secure_transection.png"}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <InfoCard
          title={t("card3_title")}
          description={t("card3_description")}
          imageUrl={"/card/plains.jpg"}
        />
      </motion.div>
    </section>
  );
}
