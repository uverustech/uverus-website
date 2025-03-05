'use client'
import { ArrowRight } from "@/app/assets/svg";
import { CustomInput } from "@/app/components/custom-input";
import { Button } from "@/app/components/shared/Button";
import { sfProSemibold } from "@/app/fonts";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const validateForm = (
    sender: string | FormDataEntryValue | null,
    email: string | FormDataEntryValue | null,
    message: string | FormDataEntryValue | null,
    company: string | FormDataEntryValue | null,
  ) => {
    let isValid = true;
  
    // Validate name
    if (!sender || typeof sender !== 'string' || sender.trim().length === 0) {
      toast('Name is required.', {type: 'info'});
      isValid = false;
    }
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
      toast('A valid email address is required.', {type: 'info'});
      isValid = false;
    }
  
    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      toast('Message cannot be empty.', {type: 'info'});
      isValid = false;
    }
    // Validate company
    if (!company || typeof company !== 'string' || company.trim().length === 0) {
      toast('Company cannot be empty.', {type: 'info'});
      isValid = false;
    }
  
    return isValid;
  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = async (e:any) => {
    e.preventDefault();
    const form = formRef.current;

    if (form) {
      const formData = new FormData(form);
      const sender = formData.get('fullname');
      const email = formData.get('email');
      const company = formData.get('company');
      const message = formData.get('message');
      const isValid = validateForm(sender, email, message, company);

      if (!isValid) return; 

      try {
        setLoading(true);
        await emailjs.send(
          'service_7t90odl', //'YOUR_SERVICE_ID',
          'template_y4c8quq', //'YOUR_TEMPLATE_ID',
          {
            sender,
            email,
            message,
            company
          },
          {
            publicKey: 'PdSUuPyFXRbDLULjA', //'YOUR_PUBLIC_KEY',
          },
        );
        toast("Message sent successfully", { type: "success" });
        e.target.reset();
      } catch (err) {
        if (err instanceof EmailJSResponseStatus) {
          console.log('EMAILJS FAILED...', err);
          toast("An error has occured", { type: "error" });
          return;
        }
        toast("Message sending failed", { type: "error" });
      }
      finally{
        setLoading(false); 
      }
    }
  };

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
    <>
      <ToastContainer />
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
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8 w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0">
          {inputData.map((c, idx) => (
            <CustomInput
              key={idx}
              label={c.label}
              placeholder={c.placeholder}
              type={c?.type}
              name={c.name}
            />
          ))}
          <Button variant="dark" type="submit" loading={loading} fullWidth={true} className="h-[52px] md:max-w-[404px] mx-auto flex justify-center items-center gap-3">Send <ArrowRight /></Button>
        </form>
      </section>
    </>
  );
}
