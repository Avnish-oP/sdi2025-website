export default function Sponsors() {
  const sponsors = [
    { src: "images/sponsors/Blusmart.png", alt: "Bluesmart Logo" },
    { src: "images/sponsors/DMRC.png", alt: "DMRC Logo" },
    // { src: "images/sponsors/DTTDC.png", alt: "DTTDC Logo" },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 relative">
      {/* Add a subtle pattern or overlay */}
      <div className="absolute inset-0 bg-pattern bg-opacity-10"></div>

      <h2 className="text-4xl md:text-5xl text-center font-bold text-indigo-800 mb-16 animate__animated animate__fadeIn">
        Our Sponsors
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 px-5 md:px-14">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo key={index} src={sponsor.src} alt={sponsor.alt} />
        ))}
      </div>
    </div>
  );
}

type SponsorLogoProps = {
  src: string;
  alt: string;
};

function SponsorLogo({ src, alt }: SponsorLogoProps) {
  return (
    <div className="flex justify-center items-center h-40 w-80 bg-white shadow-md border-2 border-indigo-200 rounded-lg hover:shadow-xl hover:border-indigo-300 transition transform hover:scale-105 ease-in-out duration-300">
      <img
        src={src}
        alt={alt}
        className="h-auto max-h-44 w-auto object-contain transition-transform transform hover:scale-110 ease-in-out duration-300"
      />
    </div>
  );
}
