"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LinkedInIcon from "@/icons/social/linkedin.svg";
import { linkedinLink } from "@/helpers/socialLinks";
export interface IPrimaryFooterProps {}

export default function PrimaryFooter(props: IPrimaryFooterProps) {
  return (
    <footer
      className="bg-[#1f3043]  py-2 pb-4 text-white  flex justify-center items-center relative
      
    
    "
      /* after:border-t-[1px] after:border-t-red-[#C9C9C9] after:absolute after:w-full after:h-full after:top-0 after:left-0 */
    >
      <div
        className="flex flex-col items-center xl:flex-row   gap-4 xl:gap-[26rem]  py-2
      xl:items-start 
      "
      >
        <div className="flex flex-col   items-center gap-4   ">
          <div className="">
            <p className="text-xs lg:text-sm">
              <span className="font-bold">Copyrights </span> 2024 All rights
              reserved <span className="font-bold">Shpper.net</span>
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src={"/icons/pci_sign.svg"}
              height={21}
              width={54}
              alt="pci"
            />
            <p className="text-[8px]">
              Shpper&apos;s payments and KYC Uses 256-Bit SSL Encryption
              <br />
              100% Of The Time On Every Device. PCI DSS V3.0 Compliant.
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-6">
          <div className="flex flex-col md:flex-row gap-[10px] items-center">
            <h6 className="text-center text-[10px] md:text-[10px] font-light leading-[150%]">
              We accept
            </h6>
            <Image
              src="/payments/Payment_Gateways_nobg.svg"
              height={18}
              width={240}
              alt="payment_options"
            />
          </div>
          <div className="text-[10px] ">
            <h4 className="flex flex-col xl:items-start items-center">
              For inquiries related to investment opportunities,<br></br>
              <span className="flex gap-1 items-end relative z-[1]">
                connect with us on <strong>LinkedIn</strong>
                <Link href={linkedinLink} className="cursor-pointer ">
                  <LinkedInIcon className="w-4 h-4 fill-white hover:fill-blue-500 mb-[2px]" />
                </Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
