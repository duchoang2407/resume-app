import Image from "next/image";
const EducationSection = () => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#C09061]">Education</h2>
        <Image
          src="/CoffeeEducation.png"
          alt="coffee"
          width={40}
          height={40}
          className="ml-12 mb-3"
        />
      </div>

      <div className="ml-10">
        <h3 className="font-bold text-xl text-[#5d4833]">
          Responsive Web Design
        </h3>
        <p className="text-sm text-gray-600">freeCodeCamp | Earned 2025</p>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>
            Built responsive UIs with React.js and TypeScript in a team setting.
          </li>
          <li>Enhanced component performance and accessibility.</li>
          <li>Gained experience with Agile and Git workflows.</li>
          <li>Helped troubleshoot and fix front-end bugs.</li>
          <li>Studied HTML, CSS, and responsive design.</li>
          <li>Created mobile-friendly, accessible web layouts.</li>
        </ul>
        <a
          href="https://www.freecodecamp.org/certification/duchoang2407/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C09061] hover:underline text-base  mt-8 inline-block"
        >
          View Certification
        </a>
      </div>
    </section>
  );
};

export default EducationSection;
