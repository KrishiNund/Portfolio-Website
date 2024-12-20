import { Fade, Slide, Bounce } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <div id="about" className="flex flex-col items-center h-screen w-screen gap-y-6 md:gap-y-4">
      <h2 className="text-3xl font-bold mt-8 highlight">About</h2>
      {/* Basic Introduction */}
      <div className="w-screen flex flex-col md:flex-row items-center text-lg md:text-xl justify-center">
        <div className="flex flex-col text-center md:text-justify leading-loose">
          <Fade direction="up" delay={450} duration={2000} cascade damping={0.5} triggerOnce={true}>
            <p>Hi, my name is Krishi</p>
            <p>I'm currently a final year CS student at</p>
            <p>Middlesex University Mauritius</p>
          </Fade>
        </div>

        <div className="w-3/5 md:w-1/4 clip-polygon">
          <Slide direction="right" delay={3000} duration={2000} triggerOnce={true}>
            <img
              src="programmer.png"
              alt="programmer"
            />
          </Slide>
        </div>
      </div>

      {/* Hobbies/Interest */}
      <div className="w-screen flex flex-col-reverse md:flex-row items-center text-lg md:text-xl justify-center gap-8">
        <div className="w-3/5 md:w-1/4 clip-polygon">
          <Slide direction="left" delay={8000} duration={2000} triggerOnce={true}>
            <img
              src="programming.png"
              alt="programming gif"
            />
          </Slide>
        </div>

        <div className="flex flex-col text-center md:text-justify leading-loose">
          <Fade direction="left" delay={4000} duration={2000} cascade damping={0.5} triggerOnce={true}>
            <p>I'm passionate about full-stack development</p>
            <p>I love creating cool and pretty websites</p>
            <p>In my free time, I enjoy video games and music</p>
          </Fade>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <Bounce delay={9000} duration={2000} triggerOnce={true}>
          <i className="fa-solid fa-arrow-down text-2xl md:text-3xl"></i>
        </Bounce>
      </div>
       
    </div>
  );
};

export default Welcome;
