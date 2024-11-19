"use client";
import { ProfileTick } from "@/app/assets/svg";
import { sfProSemibold } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";
import image1 from "@/app/assets/categories/image1.png";
import image2 from "@/app/assets/categories/image2.png";
import image3 from "@/app/assets/categories/image3.png";

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Freelancers");
  const categories = ["Start ups", "Freelancers", "Enterprises"];
  const categoriesData = [
    {
      title: "Start ups",
      description:
        "Start collecting payments from clients all over the world. Create a business and start selling in no time.",
      image: image1,
      alt: "People in a startup meeting",
    },
    {
      title: "Freelancers",
      description:
        "Start collecting payments from clients all over the world. Create a business and start selling in no time.",
      image: image2,
      alt: "Freelancer working on a project",
    },
    {
      title: "Enterprises",
      description:
        "Start collecting payments from clients all over the world. Create a business and start selling in no time.",
      image: image3,
      alt: "An enterprise building",
    },
  ];

  return (
    <section className="py-[250px] bg-primary/5">
      <div className="container px-4 md:px-10 lg:px-20 mx-auto flex flex-col gap-10">
        <h2
          className={`${sfProSemibold.className} font-semibold max-w-[22ch] text-dark text-[55px] leading-[70px] text-center self-center`}
        >
          {" "}
          Get the Most Powerful and <br />
          <span className="text-primary">Easy to Use</span> Payment Software
        </h2>
        <div className="flex justify-center items-center gap-6">
          {categories.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(c)}
              className={`${
                activeCategory === c
                  ? "bg-primary/10 text-primary"
                  : "bg-white text-[#232222]"
              } rounded-full h-[50px] px-8 flex items-center transition duration-200`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex relative max-w-7xl mx-auto mt-[105px]">
          {categoriesData.map((category, idx) => (
            <div
              key={idx}
              className={`${
                category.title === activeCategory
                  ? "scale-110 z-50 absolute left-1/2 -translate-x-1/2"
                  : "scale-100"
              } transition duration-200 bg-white rounded-[18px] w-full max-w-[301px] md:max-w-[441px] h-full  pt-6 px-6`}
            >
              <div>
                <div>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={392}
                    height={401}
                    unoptimized
                  />
                </div>
                <div
                  className={`${
                    category.title === activeCategory
                      ? "bg-category-bg-active"
                      : "bg-category-bg"
                  } px-[18px] pt-[21px] pb-7 bg-cover text-white`}
                >
                  <div className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center">
                    <ProfileTick />
                  </div>
                  <h3 className={`${sfProSemibold} text-2xl`}>
                    {category.title}
                  </h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className={`${sfProSemibold.className} bg-[#232222] text-white px-[14px] rounded-full h-8 text-xs font-semibold my-3`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
