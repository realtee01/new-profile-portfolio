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
            <div className="text-xl leading-relaxed mb-6 space-y-6">
              <p>
                I am a Frontend Engineer and Computer Science student at the University of Lagos, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
              </p>
              <p>
                My approach to development is rooted in <b className="text-[#00e5ff]">performance-first engineering</b> — building applications that are not just visually appealing, but fast, scalable, and reliable.
              </p>
              <p>
                I’m not the developer who jumped straight into frameworks. I took the long road — mastering <b className="text-[#c770f0]">vanilla JavaScript</b> and understanding how things work under the hood. Today, I build with modern tools like <b className="text-[#00e5ff]">React and Tailwind</b>, with a deep understanding of system behavior and performance.
              </p>
              <p>
                Beyond interfaces, I develop complete, production-ready applications with secure authentication, user dashboards, and dynamic data handling. I build secure, scalable backend systems using modern technologies, enabling businesses and startups to launch fast and efficiently without unnecessary complexity.
              </p>
              <p>
                I help businesses launch faster by delivering production-ready applications without the overhead of large development teams.
              </p>
              <p>
                My focus is simple: creating clean, scalable solutions that not only function seamlessly but are intuitive and enjoyable for users.
              </p>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gradient mb-6">⚙️ What I Do</h2>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I build complete websites and web apps from idea to launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I create secure login systems and manage user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I design simple, easy-to-use dashboards and admin panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I connect apps to real-time data so everything stays updated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I make sure websites work smoothly on all devices (mobile, tablet, desktop)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I improve speed, performance, and overall user experience</span>
                  </li>
                </ul>
              </div>
            </div>
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
