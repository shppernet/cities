import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import * as React from "react";

export interface IRefundPolicySectionProps {}

export default function RefundPolicySection(props: IRefundPolicySectionProps) {
  return (
    <section className="text-[#777777]  space-y-4 mt-10 pb-10">
      <PolicyContent
        title={termsContent.refundPolicy.title}
        description={termsContent.refundPolicy.description}
        lists={termsContent.refundPolicy.lists}
      />
      {termsContent.refundPolicy?.conclution?.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </section>
  );
}
