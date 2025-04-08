import Image from "next/image";
const SkillsSection = () => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#C09061]">Skills</h2>
        <Image
          src="/CoffeeBean.png"
          alt="coffee"
          width={40}
          height={40}
          className="ml-10 mb-1"
        />
      </div>

      <div className="ml-10">
        <h3 className="font-bold text-xl text-[#5d4833]">Soft Skills</h3>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>Communicates effectively and confidently in public settings.</li>
          <li>
            Works well with others in team-based and collaborative projects.
          </li>
          <li>
            Adapts quickly to new situations and tackles challenges with a focus
            on solutions.
          </li>
        </ul>
      </div>

      <div className="mt-8 ml-10 text-[#5d4833]">
        <h3 className="font-bold text-xl m-auto-0">Hard Skills</h3>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>Proficient in HTML, CSS, JavaScript, and TypeScript.</li>
          <li>
            Direct experience developing with React.js and contemporary
            front-end technologies.
          </li>
          <li>
            Understands and applies responsive design techniques and ensures
            cross-browser functionality.
          </li>
          <li>Familiar with Git for managing code versions.</li>
          <li>
            Basic understanding of Agile methodologies and software development
            lifecycles.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
