"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 flex justify-between items-center rtl mx-14 mt-7 2xl:mx-20 2xl:mt-10"
      dir="rtl"
    >
      <Image
        src="/logo.svg"
        alt="Mukalama"
        width={141.56}
        height={40}
        className="w-[70px] lg:w-[80px] 2xl:w-[141.56px]"
      />
      <div className="flex gap-[50px] items-center">
        <div className="header-item flex gap-[25px] items-center">
          <Image
            src="/assets/icons/email.icon.svg"
            alt="Email"
            width={20}
            height={20}
            className="w-auto h-[15px] 2xl:h-[20px]"
          />
          <Image
            src="/assets/icons/instagram.icon.svg"
            alt="Instagram"
            width={20}
            height={20}
            className="w-auto h-[15px] 2xl:h-[20px]"
          />
          <Image
            src="/assets/icons/phone.icon.svg"
            alt="Phone"
            width={20}
            height={20}
            className="w-auto h-[15px] 2xl:h-[20px]"
          />
        </div>
        <Button size={"icon"} variant="ghost" className="flex-col scale-75">
          <span className="w-7 h-[3px] bg-foreground" />
          <span className="w-7 h-[3px] bg-primary" />
        </Button>
      </div>
    </header>
  );
};
