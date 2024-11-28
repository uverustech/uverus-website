import { ArrowRight } from "@/app/assets/svg";
import { CustomInput } from "@/app/components/custom-input";
import { Button } from "@/app/components/shared/Button";
import { sfProSemibold } from "@/app/fonts";

export default function Contact() {
  const contactData = [
    { name: "Location", value: "Wuse, Abuja" },
    {
      name: "Email Address",
      value: "info@uverus.com",
      url: "mailto:info@uverus.com",
    },
    {
      name: "Contact Numbers",
      value: "(+234) 797-536-345",
      url: "tel:+234797536345",
    },
  ];

  const inputData = [
    {
      label: "Full Name",
      placeholder: "Please input your full name",
      name: "fullname",
    },
    {
      label: "Email Address",
      placeholder: "Please input your email address",
      name: "email",
    },
    {
      label: "Company Name",
      placeholder: "Please input your company name",
      name: "company",
    },
    {
      label: "Message",
      placeholder: "What would you like to know?",
      type: "textarea",
      name: "message",
    },
  ];

  return (
    <section className="container px-4 lg:px-10 mx-auto flex flex-col md:flex-row justify-center gap-20 md:gap-10 pt-[211px] pb-[122px]">
      <div className="w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0">
        <h1
          className={`${sfProSemibold.className} text-[30px] md:text-[55px] leading-10 md:leading-[70px] mb-10`}
        >
          Contact Us
        </h1>
        <div className="flex flex-col gap-10">
          {contactData.map((c, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="text-[#6B7280] text-xl">{c.name}</h2>
              <div className="text-[#374151] text-xl">
                {c.url ? (
                  <a href={c.url} className="underline">
                    {c.value}
                  </a>
                ) : (
                  <address>{c.value}</address>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0">
        {inputData.map((c, idx) => (
          <CustomInput
            key={idx}
            label={c.label}
            placeholder={c.placeholder}
            type={c?.type}
            name={c.name}
          />
        ))}
        <Button variant="dark" fullWidth={true} className="h-[52px] md:max-w-[404px] mx-auto flex justify-center items-center gap-3">Send <ArrowRight /></Button>
      </div>
    </section>
  );
}
