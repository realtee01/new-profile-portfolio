import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-[#0a0410] py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white text-sm md:text-base">
          Designed and Developed by Tobiloba Akala
        </div>
        <div className="text-white text-sm md:text-base">
          Copyright © {year} TA
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/realtee01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c770f0] transition-colors"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href="https://x.com/realtee1111101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c770f0] transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://wa.me/2347032533869"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c770f0] transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
