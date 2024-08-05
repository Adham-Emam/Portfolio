import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full-Stack Developer", "Python Developer", "Graphic Designer"],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  );
};

export default TypingEffect;
