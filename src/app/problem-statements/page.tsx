import React from "react";

const ProblemStatements = () => {
  const problemStatements = [
    {
      id: "SDI001",
      title:
        "Devising Innovative Solutions to Alleviate Traffic Congestion in Delhi with special focus on parking and traffic rule compliance",
      icon: "🚦",
      pdfUrl: "ps/Delhi Traffic Congestion_v2.pdf",
    },
    {
      id: "SDI002",
      title: "Achieving Zero Waste: Focus on waste segregation at source",
      icon: "♻️",
      pdfUrl: "ps/Waste segregation at source_v2.pdf",
    },
    {
      id: "SDI003",
      title:
        "Crafting Sustainable solution for Cleaner, Healthier Air in Delhi",
      icon: "🌱",
      pdfUrl: "ps/Delhi Air_V2.pdf",
    },
    {
      id: "SDI004",
      title: "Maximizing Water Efficiency: Making Every Drop Count in Delhi",
      icon: "💧",
      pdfUrl: "ps/Delhi Water_v2.pdf",
    },
    {
      id: "SDI005",
      title:
        "Creating a Safer Delhi for Women: Strengthening Law and Order for Inclusive Urban Safety",
      icon: "🛡️",
      pdfUrl: "ps/Women Safety_v3.pdf",
    },
  ];

  return (
    <div className="min-h-fit pt-28 bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Problem Statements
        </h1>
        <div className="flex flex-col gap-5">
          {problemStatements.map(({ id, title, icon, pdfUrl}) => (
              <div
              key={id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col-reverse md:flex-row hover:shadow-lg transition"
              >
              <div className="left w-4/5 flex flex-col justify-center">
                <p className="text-gray-500 text-left hidden md:block">ID: {id}</p>
                {/* <img 
                                src={icon} 
                                alt={`${title} icon`} 
                                className="h-16 w-16 mb-4"
                                /> */}
                <h2 className="text-lg md:text-xl font-bold mb-2 hover:text-indigo-700">{title}</h2>
                <div className="links flex gap-3 md:gap-5 bg-pink-600 w-[125%] md:w-auto">
                <a
                  href={pdfUrl}
                  className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Read More
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="px-6 py-3 bg-gray-100 hidden md:block border text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 transition"
                >
                  Download PDF
                </a>
                <a
                  href={`https://register.sdi2025.in/${id}`}
                  target="_blank"
                  className="px-6 py-3 bg-gray-100 border text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 transition"
                >
                  Register Now
                </a>
                </div>
              </div>
              <div className="right md:w-1/5 flex items-center justify-between py-2 md:justify-end">
                <p className="text-gray-500 text-left md:hidden">ID: {id}</p>
                <p className="md:text-8xl text-7xl p-0 md:p-2">{icon}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
