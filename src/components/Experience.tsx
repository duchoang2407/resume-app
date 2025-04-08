import Image from "next/image";
const ExperienceSection = () => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#C09061]">Experience</h2>
        <Image
          src="/CoffeeCup.png"
          alt="coffee"
          width={90}
          height={80}
          className="ml-4 mb-1"
        />
      </div>

      <div className="mb-3 ml-10">
        <h3 className="font-bold text-xl text-[#5d4833]">
          Front-End Developer Intern
        </h3>
        <p className="text-sm text-[#351d1a]">
          FPT Software | Jan 2025 – Mar 2025
        </p>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3 justify-end items-end">
          <li>
            Collaborated on developing responsive web UIs using React.js and
            TypeScript.
          </li>
          <li>
            Enhanced UI components for better performance and accessibility.
          </li>
          <li>
            Played a role in identifying and resolving front-end defects in the
            production environment.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
