"use client"
import { useState } from "react";

const faqs = [
  { question: "What is the SDI 2025?", answer: "A platform for college students in Delhi to propose innovative solutions to urban challenges like air pollution, traffic, waste management, women’s safety, and economic growth using cutting-edge technologies like AI." },
  { question: "Who can participate?", answer: "The challenge is open to college students from Delhi, aiming to engage young minds in creating practical, scalable solutions for the city." },
  { question: "What are the key focus areas?", answer: "The event focuses on clean air, women’s safety, traffic management, waste management, economic growth, and AI-powered governance." },
  { question: "How does this initiative benefit participants?", answer: "Participants will interact with policymakers, domain experts, and academicians, refining their ideas and shaping them into actionable strategies." },
  { question: "What is the objective of this challenge?", answer: "To empower students to design impactful solutions aligned with government schemes, contributing to sustainable and citizen-centric urban development." },
  { question: "Is this just a competition?", answer: "No, it’s an opportunity to shape Delhi’s future, positioning the city as a global leader in urban governance innovation." },
  { question: "What opportunities do participants gain?", answer: "Participants can showcase their ideas, gain mentorship, and contribute to practical improvements in Delhi’s governance and infrastructure." },
  { question: "What is the primary aim of this challenge?", answer: "To identify actionable strategies for addressing Delhi’s urban governance challenges." },
  { question: "How does this challenge integrate with existing government initiatives?", answer: "Participants are encouraged to align their solutions with current government schemes and initiatives for better feasibility and impact." },
  { question: "Why is AI emphasized in the challenge?", answer: "AI and emerging technologies can enhance governance by improving efficiency, transparency, and accountability." },
  { question: "How does this challenge promote collaboration?", answer: "The event fosters collaboration among policymakers, technologists, academia, and students to address systemic issues collectively." },
  { question: "Who can participate in the challenge?", answer: "Students from universities and colleges ranked under the NIRF 2024 framework and located within Delhi (NCT) are eligible." },
  { question: "How many entries can an institution submit per theme?", answer: "Each institution can submit a maximum of two entries per theme, finalized through an internal screening process." },
  { question: "How are submissions made?", answer: "All submissions must be uploaded by the institution’s designated Single Point of Contact (SPOC) via the official competition portal." },
  { question: "How many members are allowed in a team?", answer: "Each team must consist of three to five members, all from the same college." },
  { question: "What are the themes for the challenge?", answer: "The themes focus on addressing Delhi's urban challenges: Traffic Management, Zero Waste, Cleaner Air, Water Efficiency, and Women’s Safety." },
  { question: "Can a single submission address multiple themes?", answer: "Submissions should primarily focus on one theme to maintain clarity and relevance, but interdisciplinary approaches are welcome if they enhance the solution." },
  { question: "What are the awards for the winners?", answer: "The winners will receive a trophy, a certificate of achievement, ₹5 Lacs cash prize, and the opportunity to implement the solution with funding and mentorship." },
  { question: "What do the first and second runner-ups receive?", answer: "First Runner-Up and Second Runner-Up will receive a trophy, Certificate of Excellence, and cash prizes of ₹3 Lacs and ₹1 Lac, respectively." },
  { question: "Are there awards for special mentions?", answer: "Yes, participants receiving special mentions will be awarded a Certificate of Appreciation." },
  { question: "How will mentorship be provided during the challenge?", answer: "After Stage 1, each team will be assigned a mentor to help refine their ideas and presentations for Stage 2. After Stage 2, qualifying teams will be paired with a senior government official who will provide insights into the relevant department’s operations and initiatives."},
  { question: "Who will judge the submissions in Stage 2? ", answer: "The Stage 2 jury will include policymakers, domain experts, and academicians who will provide a comprehensive evaluation of the solutions"},
  { question: "Who will be part of the Grand Finale jury?", answer: "The Grand Finale will feature an esteemed jury, chaired by the Hon’ble Lieutenant Governor of NCT of Delhi, alongside experts from top universities, technocrats, urban planners, and specialists from niche domains."},
  { question: "What are the key evaluation criteria for the challenge?", answer: "Submissions will be evaluated based on five key criteria. Firstly, solutions must address relevant issues within Delhi’s urban landscape, focusing on significant challenges. Proposals should be innovative, offering novel and scalable ideas that move beyond conventional approaches. Feasibility is essential, with ideas needing to align with the city’s resources and policies for practical implementation. Impact is another crucial factor, with solutions required to produce measurable, positive outcomes in governance. Finally, submissions should build upon or enhance existing government initiatives to maximize their effectiveness."},
];

export default function FAQs() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 10);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-16">SDI 2025 FAQs</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions? Find answers below or use the search bar to explore.
      </p>
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="max-w-4xl mx-auto">
        {displayedFaqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-4 text-lg font-medium text-gray-800 flex justify-between items-center"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              {faq.question}
              <span className={`transform ${expanded === index ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expanded === index && (
              <div className="p-4 text-gray-700 border-t border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500">
            No FAQs match your search. Try a different query.
          </p>
        )}
      </div>
      {filteredFaqs.length > 10 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
