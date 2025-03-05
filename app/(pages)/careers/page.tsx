'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { sfProSemibold } from "@/app/fonts";


const jobListings = [
  {
    id: 'frontend-developer-react-nextjs',
    title: 'Frontend Developer - React/NextJS',
    location: 'Abuja, Nigeria (Onsite)',
    description: 'We are looking for a skilled React/Next.js Developer with experience in fintech applications and real-time systems.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

export default function Careers() {
  const [jobs] = useState(jobListings);

  return (
    <section className="container mx-auto px-4 lg:px-10 pt-[104px] h-full min-h-[80vh] md:min-h-screen">
      <div className="text-center flex flex-col items-center gap-6 mb-10">
      <h1
            className={`${sfProSemibold.className} text-[30px] md:text-[55px] leading-10 md:leading-[70px] text-center max-w-[19ch] mx-auto`}
        >
            Come work with Us
        </h1>
        <p className="text-xl text-[#232222] text-center">
          We&apos;re looking for passionate people to join us on our mission
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg border overflow-hidden">
              <Image src={job.image} alt={job.title} width={1470} height={980} className="w-full h-48 object-cover" unoptimized />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link href={`/careers/${job.id}`} className="text-primary hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-primary bg-primary/10 text-sm md:text-[30px] rounded-[50px] h-fit min-h-[37px] md:min-h-[57px] w-fit flex items-center text-center mx-auto px-4 gap-2.5 mb-9 md:mb-10">
            There are no current openings
          </p>
        )}
      </div>
    </section>
  );
}

