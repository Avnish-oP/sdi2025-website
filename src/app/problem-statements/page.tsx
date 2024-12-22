import React from "react";

const ProblemStatements = () => {
  const problemStatements = [
    {
      id: "SDI001",
      title:
        "Devising Innovative Solutions to Alleviate Traffic Congestion in Delhi with special focus on parking and traffic rule compliance",
      icon: "🚦",
      pdfUrl: "ps/Delhi Traffic Congestion_v1.pdf",
    },
    {
      id: "SDI002",
      title: "Achieving Zero Waste: Focus on waste segregation at source",
      icon: "♻️",
      pdfUrl: "ps/Waste segregation at source_v1.pdf",
    },
    {
      id: "SDI003",
      title:
        "Crafting Sustainable solution for Cleaner, Healthier Air in Delhi",
      icon: "🌱",
      pdfUrl: "ps/Delhi Air.pdf",
    },
    {
      id: "SDI004",
      title: "Maximizing Water Efficiency: Making Every Drop Count in Delhi",
      icon: "💧",
      pdfUrl: "ps/Delhi Water.pdf",
    },
    {
      id: "SDI005",
      title:
        "Creating a Safer Delhi for Women: Strengthening Law and Order for Inclusive Urban Safety",
      icon: "🛡️",
      pdfUrl: "ps/Women Safety_v1.pdf",
    },
  ];

  return (
    <div className="min-h-fit pt-28 bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Problem Statements
        </h1>
        <div className="flex flex-col gap-5">
          {problemStatements.map(({ id, title, icon, pdfUrl }) => (
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
                <a
                  href={pdfUrl}
                  download
                  className="inline-block bg-indigo-600 w-fit text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Download PDF
                </a>
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
