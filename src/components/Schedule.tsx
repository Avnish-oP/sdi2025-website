"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from 'next/link';

export function HackathonTimeline() {
    const data = [
        {
          title: "Dec 24, 2024",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Inauguration Ceremony
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                Digital Launch by Hon&apos;ble Chancellor, GGSIPU, Delhi
              </p>
              <div className="">
                <img
                  src="/images/LG_Sir.jpeg"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue:</span> Raj Niwas, Delhi
                </p>
              </div>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Time:</span> 10:30 AM
                </p>
            </div>
          ),
        },
        {
          title: "Dec 28, 2024 - Jan 21, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 1: Online Round
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                
                <Link className="underline text-blue-600" href={`https://register.sdi2025.in/`} target="_blank">Online Submission of Ideas </Link>
              </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal pb-6"><s className="text-red-500"><strong>Submission Deadline:</strong> 18 January 2025, 11:59 PM</s></p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal pb-6"><strong>Extended Submission Deadline:</strong> 21 January 2025, 11:59 PM</p>
              <div className="">
                <img
                  src="/images/online_round.jpg"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue:</span> Hosted on the
                  GGSIP University Competition Portal
                </p>
              </div>
                <p className="text-red-600 text-sm md:text-lg font-bold mt-4">
                  <s>Result Date: Jan 23, 2025</s>
                </p>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl font-bold">Result Date (Extended):</span> <b>Jan 27, 2025</b>
                </p>
            </div>
          ),
        },
        {
          title: "Jan 28 - 30, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 2: Mentor&apos;s Handholding
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person/Online
              </p>
              <div className="4">
                <img
                  src="/images/delhi_level_round.png"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue: </span> Auditorium, GGSIP university,  East delhi campus,  Surajmal Vihar
                </p>
              </div>
              
            </div>
          ),
        },
        {
          title: "Jan 31, 2025 (Friday)",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
               Stage 3: Physical Evaluation for Shortlisted Ideas
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person through PPT
              </p>
              <div className="">
                <img
                  src="/images/project-evaluation.jpeg"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue: </span> Auditorium, GGSIP University,  East Delhi Campus,  Surajmal Vihar, Delhi
                </p>
              </div>
                {/* <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Jury:</span> Five eminent juries
                </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                10:00 AM - 01:30 PM: Presentations by different teams and mentorship by jury
                members
              </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                01:30 PM - 02:00 PM: Lunch
              </p> */}
            </div>
          ),
        },
        {
          title: "Feb 4, 2025 (Tuesday)",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 4: The Grand Finale
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person event
              </p>
              <div className="">
                <img
                  src="/images/grand_finale.png"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue:</span> Auditorium, GGSIP University,  East Delhi Campus,  Surajmal Vihar, Delhi
                </p>
              </div>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Time:</span> 10:00 AM - 05:00 PM
                </p>
            </div>
          ),
        },
      ];
      
      

  return (
    <div className="w-full bg-white font-sans md:px-10 ">
      <Timeline data={data} />
    </div>
  );
}
