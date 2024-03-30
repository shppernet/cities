import * as React from "react";
import { aboutContent } from "@/content/aboutContent";
export interface IOurJourneySectionProps {}

export default function OurJourneySection(props: IOurJourneySectionProps) {
  return (
    <section
      className="mx-auto max-w-[680px] mt-10 mb-40 pr-6
    "
    >
      <div className="space-y-3">
        <h6 className="text-sm leading-[22px] text-[#1f3043] font-bold">
          {aboutContent.journeyContent.subHeading}
        </h6>
        <h1 className="text-2xl leading-8 font-bold ">
          Countless satisfied customers, a devoted team of <br /> shppers, and
          impressive milestones!
        </h1>
        <h6 className="text-sm text-[#777777]/50 font-semibold">
          {aboutContent.journeyContent.subTitle}
        </h6>
      </div>
      {/* grid  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 mt-24">
        {aboutContent.journeyContent.milestones.map((milestone, index) => (
          <div className={`flex justify-center`} key={index}>
            <div className="text-center w-fit">
              <strong className="font-bold text-[40px] leading-[56px]">
                {milestone.score}
              </strong>
              <p className="uppercase font-medium text-sm text-[#ddcaca] ">
                {milestone.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
