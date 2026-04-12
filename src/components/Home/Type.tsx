import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <div className="w-full flex justify-center md:justify-start text-center md:text-left">
      <Typewriter
        options={{
          strings: [
            "Frontend Engineer",
            "React Developer",
            "Performance-First Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
