import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="gap-8 grid md:grid-cols-4 mb-8">
          <div>
            <h3
              className="mb-4 font-serif text-[#D4AF37] text-2xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Yahaya Abdulsamad
            </h3>
            <p className="text-gray-400">
              Front-end Developer crafting exceptional digital experiences
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#D4AF37]">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Shopify Development</li>
              <li>API Integration</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#D4AF37]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abdulsamad25"
                className="flex justify-center items-center bg-gray-800 hover:bg-[#D4AF37] rounded-full w-10 h-10 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulsamad-yahaya-b68228323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="flex justify-center items-center bg-gray-800 hover:bg-[#D4AF37] rounded-full w-10 h-10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/yahaya_samad"
                className="flex justify-center items-center bg-gray-800 hover:bg-[#D4AF37] rounded-full w-10 h-10 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:samadolalekan15@gmail.com"
                className="flex justify-center items-center bg-gray-800 hover:bg-[#D4AF37] rounded-full w-10 h-10 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-gray-800 border-t text-center">
          <p className="flex justify-center items-center gap-2 text-gray-400">
            Yahaya Abdulsamad © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
