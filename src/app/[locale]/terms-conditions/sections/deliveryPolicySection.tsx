import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import * as React from "react";

export interface IDeliveryPolicySectionProps {}

export default function DeliveryPolicySection(
  props: IDeliveryPolicySectionProps
) {
  return (
    <section className="text-[#777777]   space-y-4 pb-10">
      <PolicyContent
        title={termsContent.deliveryPolicy.title}
        description={termsContent.deliveryPolicy.description}
        lists={termsContent.deliveryPolicy.lists}
      />
      {termsContent.deliveryPolicy.conclution.map((content, index) => (
        <p key={index} className="">
          {content}
        </p>
      ))}
    </section>
  );
}
