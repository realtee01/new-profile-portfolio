import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <div className="w-full flex justify-center md:justify-start text-center md:text-left">
      <Typewriter
        options={{
          strings: [
            "Frontend Engineer",
            "Software Engineer",
            "Building Fast Web Experiences",
            "I Build Modern Websites That Convert",
            "React Developer",
            "Design to Code Expert",
            "Framer Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          delay: 80,
        }}
      />
    </div>
  );
}
