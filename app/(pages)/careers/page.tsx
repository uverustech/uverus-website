'use client'
import Link from 'next/link';
import { useState } from 'react';
import { CareerHero } from '@/app/components/career-hero';

const jobListings = [
  {
    id: 'frontend-developer-react-nextjs',
    title: 'Frontend Developer - React/NextJS',
    location: 'Abuja, Nigeria (Onsite)',
    description: 'We are looking for a skilled React/Next.js Developer with experience in fintech applications and real-time systems such as games or streaming...',
    url: 'https://uverus.zohorecruit.com/jobs/Careers/811684000000518935/Frontend-Developer---React-NextJS?source=CareerSite',
  },
  {
    id: '2',
    title: 'Backend Developer - Python',
    location: 'Abuja, Nigeria (Onsite)',
    description: 'We are seeking a skilled Python Developer with experience integrating AI/ML systems and APIs, and exposing functionality via first-party APIs. In this...',
    url: 'https://uverus.zohorecruit.com/jobs/Careers/811684000000523049/Backend-Developer---Python?source=CareerSite'
  },
  {
    id: '3',
    title: "Backend Developer - PHP/Laravel",
    location: "Abuja, Nigeria (Onsite)",
    description: "We are seeking an experienced PHP Developer with Laravel expertise to join our engineering team. In this role, you'll work on building and maintaining...",
    url: "https://uverus.zohorecruit.com/jobs/Careers/811684000000523075/Backend-Developer---PHP-Laravel?source=CareerSite"
  },
  {
    id: '4',
    title: "Blockchain Developer",
    location: "Abuja, Nigeria (Onsite)",
    description: "We are seeking an experienced Blockchain Developer with expertise in Solana development to join our innovative team. In this role, you will be respons...",
    url: "https://uverus.zohorecruit.com/jobs/Careers/811684000000523096/Blockchain-Developer?source=CareerSite"
  },
  {
    id: '5',
    title: "Technical Assistant",
    location: "Remote",
    description: "Publish engaging blog posts on company products, industry trends, and technical topics Compose and send broadcast emails to our subscriber base using ...",
    url: "https://uverus.zohorecruit.com/jobs/Careers/811684000000523121/Technical-Assistant?source=CareerSite"
  },
  {
    id: '6',
    title: "Product Manager",
    location: "Abuja, Nigeria (Onsite)",
    description: "We are seeking a Product Manager to drive the strategy, development, and execution of our social, gaming and Web3 products. As a key leader, you will ...",
    url: "https://uverus.zohorecruit.com/jobs/Careers/811684000000523153/Product-Manager?source=CareerSite"
  },
];

export default function Careers() {
  const [jobs] = useState(jobListings);

  return (
    <>
    <CareerHero />
    <section className="container mx-auto px-4 lg:px-10 py-16 md:py-[104px] h-full" id="openings">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg border overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{job.location}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                <Link href={`${job.url}`} target='_blank' className="text-primary hover:underline font-semibold">
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
    </>
  );
}

