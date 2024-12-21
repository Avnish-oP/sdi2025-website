const WhySDISection = () => {
    const items = [
      {
        title: "Actionable Strategies",
        description:
          "Identify actionable strategies to tackle Delhi&apos;s urban governance challenges.",
        icon: "⚙️",
      },
      {
        title: "Leverage Government Initiatives",
        description:
          "Encourage participants to leverage existing government schemes and initiatives to finetune their solutions.",
        icon: "📜",
      },
      {
        title: "AI in Governance",
        description:
          "Promote the use of AI and emerging technologies in governance to enhance efficiency, transparency, and accountability.",
        icon: "🤖",
      },
      {
        title: "Collaborative Solutions",
        description:
          "Foster collaboration among policymakers, technologists, academia, and students to address systemic challenges.",
        icon: "🤝",
      },
      {
        title: "Recognize Innovation",
        description:
          "Recognize and reward scalable, innovative solutions with measurable impact.",
        icon: "🏆",
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-br from-indigo-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-indigo-600 mb-8">
            Why is SDI Important for Delhi&apos;s Development?
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 mb-12">
            Smart Delhi Ideathon serves as a transformative platform to address
            the pressing challenges of urban governance, fostering innovation and
            collaboration for a smarter and better Delhi.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:rotate-1 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 text-3xl mb-4 mx-auto group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-indigo-600 text-center mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhySDISection;
  