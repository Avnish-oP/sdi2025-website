"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HackathonTimeline() {
    const data = [
        {
          title: "Dec 25, 2024",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Inauguration Ceremony
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                Digital Inauguration by Hon&apos;ble Lieutenant Governor of GNCT of Delhi
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
                  <span className="text-indigo-600 text-xl">Time:</span> 11:00 AM
                </p>
            </div>
          ),
        },
        {
          title: "Dec 25, 2024 - Jan 13, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 1: Online Round
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                Online Submission (For more details, refer to competition link…)
              </p>
              <div className="">
                <img
                  src="https://placehold.co/500x400"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue:</span> Hosted on the
                  GGSIP University Competition Portal (Link)
                </p>
              </div>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Result Date:</span> Jan 16, 2025
                </p>
            </div>
          ),
        },
        {
          title: "Jan 24, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 2: Delhi Level Round
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person through PPT
              </p>
              <div className="4">
                <img
                  src="https://placehold.co/500x400"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue: </span> GGSIPU Auditorium at Shahdara Campus
                </p>
              </div>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Result Date:</span> Jan 25, 2025
                </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                10:00 AM - 01:00 PM: Presentations by different teams and mentorship by Jury
                members
              </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                01:00 PM - 02:00 PM: Lunch
              </p>
            </div>
          ),
        },
        {
          title: "Jan 30, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Interaction with Officials and Experts
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person through PPT
              </p>
              <div className="">
                <img
                  src="https://placehold.co/500x400"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue: </span> GGSIPU Auditorium at Shahdara Campus
                </p>
              </div>
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Jury:</span> Five eminent juries
                </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                10:00 AM - 01:30 PM: Presentations by different teams and mentorship by jury
                members
              </p>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                01:30 PM - 02:00 PM: Lunch
              </p>
            </div>
          ),
        },
        {
          title: "Jan 31, 2025",
          content: (
            <div>
              <h1 className="text-indigo-600 text-lg md:text-3xl font-bold antialiased mb-8">
                Stage 3: The Grand Finale
              </h1>
              <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                In-person event
              </p>
              <div className="">
                <img
                  src="https://placehold.co/300"
                  alt="Hackathon Start"
                  width={300}
                  height={500}
                  className="rounded-lg object-cover h-48 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-neutral-800 text-sm md:text-lg font-normal mt-4">
                  <span className="text-indigo-600 text-xl">Venue:</span> Raj Niwas
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
