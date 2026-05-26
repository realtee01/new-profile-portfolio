import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <div className="w-full flex justify-center md:justify-start text-center md:text-left">
      <Typewriter
        options={{
          strings: [
            "I Create Solutions to Businesses & Brands",
            "Frontend Engineer",
            "Software Engineer",
            "Product-focused Frontend Engineer",
            "Building Fast Web Experiences",
            "I Build Modern Websites That Convert",
            "React Developer",
            "Mobile App Developer",
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
