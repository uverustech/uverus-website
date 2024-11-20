import { sfProSemibold } from "@/app/fonts";
import { Button } from "../shared/Button";

export const Newsletter = () => {
  return (
    <section className="bg-dark-gradient py-20 md:py-[150px]">
      <div className="container px-4 lg:px-10 mx-auto">
        <h3
          className={`${sfProSemibold} text-[30px] md:text-[55px] leading-10 md:leading-[70px] text-center text-white max-w-[18ch] mx-auto mb-[75px]`}
        >
          Start Accepting Payments in Just Minutes
        </h3>
        <div className="flex items-center bg-[#3C4146] rounded-[12px] md:rounded-[20px] h-12 md:h-20 w-full max-w-[600px] mx-auto px-4 md:p-5 md:pl-[30px] gap-2.5">
          <input
            type="text"
            name="email"
            id="email"
            className="outline-none border-none bg-transparent w-full text-white text-xs md:text-xl placeholder:text-white"
            placeholder="Your work email"
          />
          <Button
            variant="primary"
            type="submit"
            className="!h-6 md:!h-10 text-[9px] rounded-[4px] md:rounded-lg md:text-base text-white flex-shrink-0"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
