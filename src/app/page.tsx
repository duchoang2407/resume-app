import Image from "next/image";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import SkillsSection from "@/components/Skills";
import ProfileSection from "@/components/MyProfile";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E9DBC6] via-[#faf5ed] to-[#E9DBC6] text-[#1e293b] p-8 font-sans max-w-6xl mx-auto shadow-2xl rounded-3xl">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left section */}

        <div className="md:w-2/3 flex flex-col gap-10 mt-5 font-serif">
          <div className="text-center md:text-left items-center justify-center ml-10">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-extrabold text-[#412e2c]">
                Nguyễn <span className="text-[#C09061]">Đức Hoàng</span>
              </h1>
              <Image
                src="/coffee.png"
                alt="coffee"
                width={50}
                height={50}
                className="ml-5 mb-1"
              />
            </div>

            <p className="text-xl items-end justify-end font-medium text-[#334155] mt-2 ml-85">
              Front-End Developer
            </p>
          </div>

          <div className="bg-[#fef7f1] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <EducationSection />
          </div>
          <div className="bg-[#fef7f1] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <SkillsSection />
          </div>
          <div className="bg-[#fef7f1] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <ExperienceSection />
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-1/3 bg-[#fef7f1] text-[#1e293b] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-6">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={250}
              height={250}
              className="rounded-tr-full border-3 border-[#412e2c] shadow-lg"
            />
          </div>
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}
