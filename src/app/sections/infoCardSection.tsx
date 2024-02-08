"use client";
import InfoCard from "@/components/Card/infoCard";
import * as React from "react";
import { motion } from "framer-motion";

export interface IInfoCardSectionProps {}

export default function InfoCardSection(props: IInfoCardSectionProps) {
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
          title="Your Wishlist, Our Mission"
          description="Buyers can easily create a request for any item they desire, specifying their preferences and requirements."
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
          title="Secure Transactions"
          description="We safeguard both buyers and travelers, ensuring peace of mind and financial protection for all purchases and deals."
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
          title="Unlock a World of Possibilities"
          description="Found an item that doesn't ship to you or takes too long? Concerned about pre-purchase quality? We've got you covered with our vast network of personal shoppers and travelers."
          imageUrl={"/card/plains.jpg"}
        />
      </motion.div>
    </section>
  );
}
