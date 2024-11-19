import { Inspyre, Joinda, Kolet } from "@/app/assets/svg";
import { sfProSemibold } from "@/app/fonts";

interface Business {
  name: string;
  logo: JSX.Element;
}

export const TrustedBy = () => {
  const Businesses: Business[] = [
    {
      name: "Inspyre",
      logo: <Inspyre />,
    },
    {
      name: "Kolet",
      logo: <Kolet />,
    },
    {
      name: "Joinda",
      logo: <Joinda />,
    },
  ];
  return (
    <section className="bg-dark-gradient bg-center bg-no-repeat bg-[#020202] py-[55px]">
      <div className="container px-4 md:px-10 lg:px-20 mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-[45%] flex items-center">
          <h3
            className={`${sfProSemibold} text-[55px] leading-[80px] text-light max-w-[11ch] lg:ml-16`}
          >
            We are trusted by Businesses Globally
          </h3>
        </div>
        <div className="w-full md:w-[55%] grid grid-cols-2 gap-10">
          {Businesses.map((business) => (
            <div
              key={business.name}
              aria-label={`${business.name} Logo`}
              className="w-full h-full max-h-[300px] max-w-[300px] aspect-square flex justify-center items-center rounded-[10px] bg-white p-5 md:p-10"
            >
              {business.logo}
            </div>
          ))}
          <div className="w-full h-full max-h-[300px] max-w-[300px] aspect-square flex justify-center items-center text-[#8B8B8B] text-[60px] text-center font-bold p-5 md:p-10">
            + more
          </div>
        </div>
      </div>
    </section>
  );
};
