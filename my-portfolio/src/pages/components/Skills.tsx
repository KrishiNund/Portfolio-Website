import { Fade, Zoom } from "react-awesome-reveal";

const Skills = () => {
  const skills = [
    { img: "js.svg", title: "JavaScript" },
    { img: "react.svg", title: "React.js" },
    { img: "vuejs.svg", title: "Vue.js" },
    { img: "nextjs.svg", title: "Next.js" },
    { img: "nodejs.svg", title: "Node.js" },
    { img: "typescript.svg", title: "TypeScript" },
    { img: "html.svg", title: "HTML" },
    { img: "CSS.svg", title: "CSS" },
    { img: "tailwindcss.svg", title: "Tailwind CSS" },
    { img: "bootstrap.svg", title: "Bootstrap CSS" },
    { img: "python.svg", title: "Python" },
    { img: "Cpp.svg", title: "C++" },
    { img: "C.svg", title: "C" },
    { img: "Csharp.svg", title: "C#" },
    { img: "java.svg", title: "Java" },
    { img: "mysql.svg", title: "MySQL" },
    { img: "mongodb.svg", title: "MongoDB" },
    { img: "opencv.svg", title: "OpenCV" },
    { img: "postman.svg", title: "Postman" },
    { img: "git.svg", title: "Git" },
    { img: "Figma.svg", title: "Figma" },
  ];

  return (
    <section id="skills" className="py-12 px-6">
        <div className="bg-transparent hidden xl:block h-16 w-1 rounded-full dark:bg-opacity-50 mr-auto ml-auto" style={{opacity: 1, transform: "none", marginTop:-30}}></div>
        <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center highlight text-gray-800 mb-8 mt-12 lg:mt-12 xl:mt-8">
            Skills
            </h2>

            {/* Skills Grid */}
            <Fade cascade damping={0.2} triggerOnce>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill) => (
                <div
                    key={skill.title}
                    className="flex flex-col items-center p-4 bg-[#F8F9FA] shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                    <Zoom triggerOnce>
                    <img
                        src={skill.img}
                        alt={skill.title}
                        className="w-16 h-16 md:w-20 md:h-20 mb-4"
                    />
                    </Zoom>
                    <p className="text-center text-gray-700 font-medium">
                    {skill.title}
                    </p>
                </div>
                ))}
            </div>
            </Fade>
        </div>
    </section>
  );
};

export default Skills;
