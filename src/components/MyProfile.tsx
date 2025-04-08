import { Phone, Mail, Facebook, Github } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6 mt-15">
      <p className="text-base leading-relaxed font-serif text-black">
        <span className="text-[#351d1a] font-bold">Front-end </span>developer
        specializing in responsive, user-friendly, and visually appealing web
        applications built with clean, high-quality code.
      </p>
      <div className="space-y-8 mt-15">
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-[#553D3A]" />
          <a className="text-[#5d4833] ">0908320470</a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-[#553D3A]" />
          <a
            href="mailto:meme91men@gmail.com"
            className="text-[#5d4833] hover:underline hover:text-black"
          >
            meme91men@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={24} className="text-[#553D3A]" />
          <a
            href="https://www.facebook.com/profile.php?id=100081094806494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5d4833] hover:underline hover:text-black"
          >
            Nguyễn Đức Hoàng
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="text-[#553D3A]" />
          <a
            href="https://github.com/duchoang2407"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5d4833] hover:underline hover:text-black"
          >
            duchoang2407
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
