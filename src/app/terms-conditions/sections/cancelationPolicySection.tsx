import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import * as React from "react";

export interface ICancelationPolicySectionProps {}

export default function CancelationPolicySection(
  props: ICancelationPolicySectionProps
) {
  return (
    <section className="text-[#777777]  space-y-4 mt-10 pb-10">
      <PolicyContent
        title={termsContent.cancellationPolicy.title}
        description={termsContent.cancellationPolicy.description}
        lists={termsContent.cancellationPolicy.lists}
      />
      {termsContent.cancellationPolicy?.conclution?.map((content, index) => (
        <p key={index} className="mt-[-10px]">
          {content}
        </p>
      ))}
    </section>
  );
}
