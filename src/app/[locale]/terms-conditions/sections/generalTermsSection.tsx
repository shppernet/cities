import { termsContent } from "@/content/termsContent";
import * as React from "react";

interface termsType {
  title?: string;
  terms: string[];
}
export interface IGeneralTermsSectionProps {
  terms: termsType;
}

export default function GeneralTermsSection(props: IGeneralTermsSectionProps) {
  return (
    <section
      className={`  my-10 space-y-4  mx-auto
     text-[#777777] pb-10
    `}
    >
      <h1 className="text-xl font-semibold mb-5 ">{props.terms.title}</h1>

      {props.terms.terms.map((term, index) => (
        <>
          <p className="" key={index}>
            {term}
          </p>
        </>
      ))}
    </section>
  );
}
