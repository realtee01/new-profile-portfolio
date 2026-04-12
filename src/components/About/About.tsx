import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

export default function About() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <Particle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2 text-white text-lg">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
              Know Who <strong className="text-gradient">I'M</strong>
            </h1>
            <p className="text-justify leading-relaxed mb-4">
              Hi Everyone, I am <span className="text-[#c770f0]">Tobiloba Akala </span>
              from <span className="text-[#c770f0]"> Lagos, Nigeria.</span>
              <br />
              I am currently a frontend developer open to freelance work and full-time roles.
              <br />
              I am pursuing a B.Sc. in Computer Science at the University of Lagos.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Playing Games
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Writing Tech Blogs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Travelling
              </li>
            </ul>

            <p className="text-[#c770f0] italic opacity-80">
              "Build. Ship. Repeat."
            </p>
            <footer className="text-[#c770f0] mt-2">— Tobiloba</footer>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/about.png"
              alt="about"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Professional <strong className="text-gradient">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="text-4xl font-bold text-white text-center mt-24 mb-12">
          <strong className="text-gradient">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </div>
  );
}
