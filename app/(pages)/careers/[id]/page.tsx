'use client'
import Image from 'next/image';
import Link from 'next/link';

const getJob = () => {
    return {
        id: 'frontend-developer-react-nextjs',
        title: 'Frontend Developer - React/NextJS',
        location: 'Abuja, Nigeria (Onsite)',
        description: 'We are looking for a skilled React/Next.js Developer with experience in fintech applications and real-time systems.',
        details: `<div class='space-y-4'>
      <p>At Uverus Inc., we're building innovative technology solutions that are reshaping how businesses operate. Our team is passionate about creating high-quality, scalable applications that solve real-world problems.</p>
      <h2 class='text-lg font-semibold'>Responsibilities:</h2>
      <ul class='list-disc list-inside'>
        <li>Develop and maintain <strong>high-performance, real-time web applications</strong> using <strong>React and Next.js</strong>.</li>
        <li>Implement <strong>real-time data streaming</strong> using <strong>WebSockets, WebRTC, or GraphQL subscriptions</strong>.</li>
        <li>Build responsive and <strong>highly interactive UIs</strong> optimized for fintech applications, gaming, or streaming platforms.</li>
        <li>Integrate <strong>financial APIs, payment gateways, and Web3/blockchain technologies</strong> where needed.</li>
        <li>Optimize frontend performance with <strong>code-splitting, lazy loading, memoization, and server-side rendering (SSR)</strong>.</li>
        <li>Implement authentication and authorization using <strong>OAuth, JWT, or Web3 wallets</strong>.</li>
        <li>Work with <strong>real-time state management</strong> using <strong>Redux, Zustand, or Recoil</strong>.</li>
        <li>Ensure <strong>security best practices</strong> for fintech applications, including <strong>data encryption and user protection measures</strong>.</li>
        <li>Collaborate with backend developers to design <strong>scalable API architectures</strong>.</li>
        <li>Write clean, well-documented, and maintainable code following <strong>best practices</strong>.</li>
      </ul>
      <h2 class='text-lg font-semibold'>Requirements:</h2>
      <ul class='list-disc list-inside'>
        <li><strong>3+ years</strong> of experience in <strong>React and Next.js</strong> development.</li>
        <li>Strong expertise in <strong>WebSockets, WebRTC, or real-time data streaming</strong> technologies.</li>
        <li>Experience working in <strong>fintech, gaming, or streaming applications</strong>.</li>
        <li>Familiarity with <strong>RESTful and GraphQL APIs</strong>.</li>
        <li>Strong knowledge of <strong>server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR)</strong>.</li>
        <li>Experience with <strong>state management libraries</strong> like <strong>Redux, Recoil, or Zustand</strong>.</li>
        <li>Knowledge of performance optimization techniques in Next.js (e.g., caching, preloading, and CDN strategies).</li>
        <li>Experience integrating <strong>payment systems, financial APIs, or blockchain/Web3 solutions</strong>.</li>
        <li>Familiarity with <strong>Docker, CI/CD pipelines, and cloud deployment (AWS, Vercel, or Firebase)</strong>.</li>
        <li>Strong debugging and problem-solving skills.</li>
      </ul>
      <h2 class='text-lg font-semibold'>Nice to Have:</h2>
      <ul class='list-disc list-inside'>
        <li>Experience with <strong>real-time trading, financial dashboards, or high-frequency data applications</strong>.</li>
        <li>Knowledge of <strong>gaming frameworks (Three.js, PixiJS, Phaser)</strong> for interactive UI components.</li>
        <li>Experience with <strong>real-time video streaming (HLS, WebRTC, or RTMP)</strong>.</li>
        <li>Background in <strong>security best practices for fintech applications</strong>.</li>
        <li>Familiarity with <strong>AI-driven financial analytics or predictive modeling</strong>.</li>
      </ul>
      <h2 class='text-lg font-semibold'>What We Offer:</h2>
      <ul class='list-disc list-inside'>
        <li>Competitive salary and benefits.</li>
        <li>Opportunity to work on cutting-edge fintech applications.</li>
        <li>A collaborative and innovative team culture.</li>
      </ul>
      <p>Suitable candidates for this role should reside in Abuja and be able to commute to the company's office at Lugbe, or be willing to relocate to Abuja.</p>
      <p>Uverus Inc. is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
      <h2 class='text-lg font-semibold'>How to Apply:</h2>
      <p>To apply, submit your resume and GitHub profile to <a href='mailto:engineering@uverus.com' class='text-primary hover:underline'>engineering@uverus.com</a>.</p>
    </div>`,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      }
}

// export default function JobDetails({ params }: { params: { id: string } }) {
export default function JobDetails() {
//   const id = params.id;
//   const job = jobListings.find((job) => job.id === id);
  const job = getJob();

  if (!job) {
    return <p className="text-center text-red-500 mt-10">Job not found</p>;
  }

  return (
    <section className="container mx-auto px-4 lg:px-10 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <Image src={job.image} alt={job.title} width={1470} height={980} className="w-full h-full object-cover" unoptimized />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <p className="text-gray-600 text-lg mb-2">{job.location}</p>
          <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: job.details }} />
          <Link href="mailto:engineering@uverus.com" className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-primary-dark transition">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
