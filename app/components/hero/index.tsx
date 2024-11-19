import React from "react";
import { MedalStar } from "@/app/assets/svg";
import { sfProRegular, sfProSemibold } from "@/app/fonts";
import device from "@/app/assets/images/device.png";
import cards from "@/app/assets/images/cards.png";
import Image from "next/image";
import { Button } from "../shared/Button";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-fit">
      <section className="container min-h-screen flex justify-center items-center mx-auto relative">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col gap-[30px]">
            <h1
              className={`${sfProSemibold.className} text-[55px] leading-[70px] text-center max-w-[19ch] mx-auto`}
            >
              Financial Infrastructure for African Businesses
            </h1>
            <h2
              className={`${sfProRegular.className} text-xl text-center text-dark max-w-[55ch] mx-auto`}
            >
              UverUs offers businesses in Africa a comprehensive payment system
              and essential tools to effectively engage with their customers.
            </h2>
            <div className="flex gap-[30px] justify-center">
              <Button className="h-[50px]" variant="dark">Create a free account</Button>
              <Button className="h-[50px]" variant="outlined">Contact Sales</Button>
            </div>
          </div>
          <p
            className={`${sfProSemibold.className} bg-primary/10 text-primary text-sm rounded-[20px] 
                h-[37px] w-fit flex items-center mx-auto px-4 gap-2.5`}
          >
            <MedalStar />
            Trusted by Businesses Worldwide
          </p>
        </div>
      </section>
        <Image src={device} alt="#" width={929} height={1974} aria-hidden className="hidden lg:block absolute left-0 top-1/4 h-[410px] w-auto" />
        <Image src={cards} alt="#" width={972} height={1406} aria-hidden className="hidden lg:block absolute right-0 top-1/4 h-[450px] w-auto" />
    </div>
  );
};
