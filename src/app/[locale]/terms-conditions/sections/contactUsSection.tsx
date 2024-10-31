import { mailLink } from "@/helpers/socialLinks";
import { useLocale } from "next-intl";
import * as React from "react";

export interface IContactUsSectionProps {
  title: string;
  description: string;
  email?: string;
  conclution?: string;
}

export default function ContactUsSection(props: IContactUsSectionProps) {
  const localActive = useLocale();
  return (
    <section
      className="  text-[#777777] space-y-4 pb-10"
      dir={localActive === "ar" ? "rtl" : "ltr"}
    >
      <h1 className="text-[22px]  font-semibold my-5">{props.title}</h1>
      <p>{props.description}</p>

      <ol className="pl-6 list-disc">
        <li>
          {/*  Via Email:{" "} */}
          <span className="font-semibold text-[#1f3043]">{mailLink}</span>{" "}
        </li>
      </ol>
      <p>{props.conclution}</p>
    </section>
  );
}
