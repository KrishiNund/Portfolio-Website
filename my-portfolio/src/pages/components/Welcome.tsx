import { Fade, Slide } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <section id="about" className="flex flex-col items-center min-h-screen w-screen px-6 py-14 md:gap-y-14 lg:gap-y-0 xl:gap-y-0">
      <div className="bg-transparent h-16 w-1 rounded-full  dark:bg-opacity-50" style={{opacity: 1, transform: "none", marginTop:-40}}></div>
      {/* Title */}
      <Fade triggerOnce={true}>
        <h2 className="text-4xl font-bold mt-8 md:-mt-8 lg:mt-8 highlight text-gray-800">About Me</h2>
      </Fade>

      <div className="flex flex-col items-center md:gap-32 lg:gap-4 xl:gap-16 xl:mt-0">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          {/* Text */}
          <div className="flex flex-col text-center md:text-left leading-loose max-w-md">
            <Fade direction="up" delay={200} duration={1500} cascade damping={0.5} triggerOnce={true}>
              <p className="text-lg md:text-xl text-gray-700">
                Hi, my name is <span className="font-bold text-blue-600">Krishi</span>.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                I&apos;m a final-year Computer Science student at
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-semibold text-blue-600">Middlesex University Mauritius</span>.
              </p>
            </Fade>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/KrishiNund"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-300"
              >
                <i className="fa-brands fa-github"></i>
                <p>Github</p>
              </a>
              <a
                href="Resume - Omkaar Krishi Nund.pdf"
                download="KrishiNund-Resume.pdf"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300"
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                <p>Get Resume</p>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-3/4 md:w-1/3 max-w-sm clip-polygon overflow-hidden shadow-lg">
            <Slide direction="right" delay={500} duration={1500} triggerOnce={true}>
              <img
                src="developer.png"
                alt="programmer illustration"
                className="w-full h-auto object-cover"
              />
            </Slide>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-16">
          {/* Image */}
          <div className="relative w-3/4 md:w-1/3 max-w-sm clip-polygon overflow-hidden shadow-lg">
            <Slide direction="left" delay={700} duration={1500} triggerOnce={true}>
              <img
                src="monitor.png"
                alt="programming gif"
                className="w-full h-auto object-cover"
              />
            </Slide>
          </div>

          {/* Text */}
          <div className="flex flex-col text-center md:text-left leading-loose max-w-md">
            <Fade direction="left" delay={400} duration={1500} cascade damping={0.5} triggerOnce={true}>
              <p className="text-lg md:text-xl text-gray-700">
                I&apos;m passionate about <span className="font-bold text-blue-600">full-stack development</span>.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                I love creating <span className="font-bold text-blue-600">modern, responsive, and beautiful websites</span>.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
