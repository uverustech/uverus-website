import React from "react";
import { MedalStar } from "@/app/assets/svg";
import { sfProRegular, sfProSemibold } from "@/app/fonts";
import { Button } from "../shared/Button";

export const CareerHero: React.FC = () => {
  return (
    <div className="relative h-fit bg-primary/5 bg-map-mobile md:bg-map bg-center bg-cover pb-6 md:pb-[100px]">
      <section className="container px-4 lg:px-10 min-h-[80vh] flex justify-center items-center mx-auto relative pt-[98px]">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <h1
              className={`${sfProSemibold.className} text-[30px] md:text-[55px] leading-10 md:leading-[70px] text-center max-w-[19ch] mx-auto`}
            >
              Make an impact at Uverus
            </h1>
            <h2
              className={`${sfProRegular.className} text-lg md:text-xl text-center text-dark max-w-[55ch] mx-auto`}
            >
              We know that finding a meaningful and rewarding job can be a long journey. 
              Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. 
              Start your journey with us by browsing available jobs.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] justify-center items-center">
              <Button linkClassName="px-8 h-[50px]" variant="dark" href="/careers#openings">
                View Openings
              </Button>
            </div>
          </div>
          <p
            className={`${sfProSemibold.className} bg-primary/10 text-primary text-sm rounded-[20px] 
                h-[37px] w-fit flex items-center mx-auto px-4 gap-2.5 mb-9 md:mb-10`}
          >
            <MedalStar />
            Find The Career of Your Dreams
          </p>
        </div>
      </section>
    </div>
  );
};
