import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";

export default function Home() {
  return (
    <section>
      <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 min-h-screen flex items-center" id="home">
        <Particle />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 w-full">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 w-full">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 break-words w-full">
                I'M <span className="text-gradient">TOBILOBA AKALA</span>
              </h1>

              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00e5ff] h-20 w-full flex justify-center md:justify-start text-center md:text-left">
                <Type />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/home-main.svg"
                alt="home pic"
                className="w-full max-w-md object-contain animate-[updown-hue_3s_ease-in-out_infinite]"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}
