import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

export default function Home2() {
  return (
    <div className="py-16 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left uppercase">
              LET ME <span className="text-gradient"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-xl leading-relaxed mb-6">
              I am a Frontend Engineer and Computer Science student at the University of Lagos, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
              <br />
              <br />
              My approach to development is rooted in <b className="text-[#00e5ff]">Performance-First Engineering</b>.
              <br />
              <br />
              I’m not the developer who jumped straight into frameworks. I took the long road — a year of <b className="text-[#c770f0]">vanilla JavaScript</b>, learning how things actually work under the hood. Now I build with <b className="text-[#00e5ff]">React and Tailwind</b>, and I understand why things break when they do.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with <b className="text-[#c770f0]">Node.js</b> and modern Javascript libraries and frameworks like <b className="text-[#00e5ff]">React.js</b>.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Tilt>
              <img 
                src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/avatar.svg" 
                className="w-64 h-64 object-contain rounded-full" 
                alt="avatar" 
              />
            </Tilt>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">FIND ME ON</h1>
          <p className="text-white mb-8">
            Feel free to <span className="text-[#00e5ff]">connect </span>with me
          </p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/realtee01"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/realtee1111101"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2347032533869"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
