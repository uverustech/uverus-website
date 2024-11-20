import { inter, sfProBold, sfProSemibold } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import withUverus from "@/app/assets/images/withUverus.png";
import image1 from "@/app/assets/images/features/1-bank-card.png";
import image2 from "@/app/assets/images/features/2-hash.png";
import image3 from "@/app/assets/images/features/3-bank-transfer.png";
import image4 from "@/app/assets/images/features/4-whatsapp-banking.png";
import image5 from "@/app/assets/images/features/5-qr-pay.png";
import { LevelUpCarousel } from "./carousel";

interface Feature {
  image: StaticImageData;
  heading: string;
  body: string;
}

export const LevelUp = () => {
  const Features: Feature[] = [
    {
      image: image1,
      heading: "Card Payments",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image2,
      heading: "USSD Payments",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image3,
      heading: "Bank Transfer",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image4,
      heading: "Whatsapp Banking",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image5,
      heading: "QR Pay",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image1,
      heading: "Card Payments",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image2,
      heading: "USSD Payments",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image3,
      heading: "Bank Transfer",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image4,
      heading: "Whatsapp Banking",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
    {
      image: image5,
      heading: "QR Pay",
      body: "Learn how you can receive payments via card, bank and transfer",
    },
  ];
  return (
    <section className="pt-20 md:pt-[100px]">
      <div className="container px-4 lg:px-10 mx-auto">
        <h3
          className={`${sfProBold.className} level-up flex w-fit text-primary text-xl sm:text-[30px] md:text-[55px] leading-loose md:leading-relaxed`}
        >
          Level up
        </h3>
        <div className="flex">
          <div className="w-20 sm:w-[130px] md:w-[215px] md:h-full md:min-h-20 mt-2 md:mt-auto flex items-end">
            <Image src={withUverus} alt="With Uverus" className="h-7 sm:h-10 md:h-auto w-auto" />
          </div>
          <h3
            className={`${sfProSemibold.className} your-business text-xl sm:text-[30px] md:text-[55px] pl-4 md:pl-8 -mt-[5.75px] md:-mt-[10px]`}
          >
            Your Business
          </h3>
        </div>
      </div>
      <div className="mt-20 md:mt-[100px]">
        <LevelUpCarousel>
          {Features.map((feature, idx) => (
            <div
              key={idx}
              className="border-2 border-[#FF5C5C4D] rounded-3xl w-full max-w-[230px] h-[251px] px-5 py-3 mr-5"
            >
              <div className="h-[100px] flex justify-center items-center">
                <Image
                  src={feature.image}
                  alt={feature.heading}
                  className="h-auto max-h-[100px] w-auto mx-auto"
                />
              </div>
              <h4
                className={`${inter.className} font-semibold text-sm text-[#0E2354] mb-[14.5px]`}
              >
                {feature.heading}
              </h4>
              <p className={`${inter.className} text-xs text-[#676E7E]`}>
                {feature.body}
              </p>
            </div>
          ))}
        </LevelUpCarousel>
      </div>
    </section>
  );
};
