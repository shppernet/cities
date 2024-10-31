import * as React from "react";

export interface IOurServiceSectionProps {
  htmlContent: string;
}

export default function OurServiceSection(props: IOurServiceSectionProps) {
  return (
    <div
      className="my-10 space-y-4  mx-auto
     text-[#777777] pb-10"
      dangerouslySetInnerHTML={{ __html: props.htmlContent }}
    />
  );
}
