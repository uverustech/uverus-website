import { sfProSemibold } from "@/app/fonts";

export default function Careers() {
  return (
    <section className="container mx-auto px-4 lg:px-10 pt-[104px] h-full min-h-[80vh] md:min-h-screen grid grid-rows-3">
      <div className="row-span-2 flex justify-center items-center flex-col gap-6">
        <h1
            className={`${sfProSemibold.className} text-[30px] md:text-[55px] leading-10 md:leading-[70px] text-center max-w-[19ch] mx-auto`}
        >
            Come work with Us
        </h1>
        <p className="text-xl text-[#232222] text-center">We&apos;re looking for passionate people to join us on our mission</p>
      </div>

      <div className="row-start-3 flex justify-center items-start">
        <p
          className={`${sfProSemibold.className} bg-primary/10 text-primary text-sm md:text-[30px] rounded-[50px] 
                h-fit min-h-[37px] md:min-h-[57px] w-fit flex items-center text-center mx-auto px-4 gap-2.5 mb-9 md:mb-10`}
        >
          There are no current openings
        </p>
      </div>
    </section>
  );
}
