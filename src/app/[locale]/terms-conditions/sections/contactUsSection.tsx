import { mailLink } from "@/helpers/socialLinks";
import * as React from "react";

export interface IContactUsSectionProps {}

export default function ContactUsSection(props: IContactUsSectionProps) {
  return (
    <section className="  text-[#777777] space-y-4 pb-10">
      <h1 className="text-[22px]  font-semibold my-5">Contact Us</h1>
      <p>Don’t hesitate to contact us if you have any questions.</p>

      <ol className="pl-6 list-disc">
        <li>
          Via Email:{" "}
          <span className="font-semibold text-[#1f3043]">{mailLink}</span>{" "}
        </li>
      </ol>
    </section>
  );
}
