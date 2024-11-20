import Image from "next/image";
import lego from "@/app/assets/images/lego.png";
import { sfProSemibold } from "@/app/fonts";

export const DeveloperAPI = () => {
  return (
    <section className="container px-4 lg:px-10 mx-auto flex flex-col md:flex-row justify-between py-[250px] gap-10">
      <div className="w-full md:w-1/2 flex flex-col gap-[36px]">
        <h2
          className={`${sfProSemibold.className} max-w-[18ch] text-dark text-[30px] md:text-[55px] leading-10 md:leading-[70px]`}
        >
          {" "}
          <span className="text-primary">Effortless</span> Custom Payments with{" "}
          <span className="text-primary"> Developer-Friendly</span> APIs.
        </h2>
        <p className="hidden md:block max-w-[47ch] text-[#011B33] text-lg md:text-xl">
          Developers love our thorough, well-documented APIs that let you to
          build everything from simple weekend projects, to complex financial
          products serving hundreds of thousands of customers. If you can
          imagine it, you can build it with Uverus.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center px-4">
        <Image
          src={lego}
          alt="Lego bricks stacked on each other"
          width={1271}
          height={1208}
          className="max-h-[400px] w-auto"
        />
      </div>
      <p className="md:hidden max-w-[47ch] text-[#011B33] text-lg md:text-xl">
          Developers love our thorough, well-documented APIs that let you to
          build everything from simple weekend projects, to complex financial
          products serving hundreds of thousands of customers. If you can
          imagine it, you can build it with Uverus.
        </p>
    </section>
  );
};
