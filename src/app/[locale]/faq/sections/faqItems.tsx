import AccordionDropdown from "@/components/Accourdion/accordionDropdown";
import { faqs } from "@/content/faqContents";
import * as React from "react";

export interface IFaqItemsProps {}

export default function FaqItems(props: IFaqItemsProps) {
  return (
    <section className={` p-[10px] my-10 space-y-4 max-w-[1350px] mx-auto`}>
      {faqs.map((faq, index) => (
        <AccordionDropdown key={index} title={faq.title} answer={faq.ans} />
      ))}
    </section>
  );
}
