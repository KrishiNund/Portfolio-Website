import { Fade, Slide, Bounce } from "react-awesome-reveal";

const Skills = () => {
    const skills = [
        {
            img:"js.svg",
            title:"JavaScript"
        },
        {
            img:"react.svg",
            title:"React.js"
        },
        {
            img:"vuejs.svg",
            title:"Vue.js"
        },
        {
            img:"nextjs.svg",
            title:"Next.js"
        },
        {
            img:"nodejs.svg",
            title:"Node.js"
        },
        {
            img:"typescript.svg",
            title:"TypeScript"
        },
        {
            img:"html.svg",
            title:"HTML"
        },
        {
            img:"CSS.svg",
            title:"CSS"
        },
        {
            img:"tailwindcss.svg",
            title:"Tailwind CSS"
        },
        {
            img:"bootstrap.svg",
            title:"Bootstrap CSS"
        },
        {
            img:"python.svg",
            title:"Python"
        },
        {
            img:"Cpp.svg",
            title:"C++"
        },
        {
            img:"C.svg",
            title:"C"
        },
        {
            img:"Csharp.svg",
            title:"C#"
        },
        {
            img:"java.svg",
            title:"Java"
        },
        {
            img:"mysql.svg",
            title:"MySQL"
        },
        {
            img:"mongodb.svg",
            title:"MongoDB"
        },
        {
            img:"opencv.svg",
            title:"OpenCV"
        },
        {
            img:"postman.svg",
            title:"Postman"
        },
        {
            img:"git.svg",
            title:"Git"
        },
        {
            img:"Figma.svg",
            title:"Figma"
        },
    ]
  return (
    <div id="skills" className="flex flex-col items-center h-screen w-screen gap-y-10 md:gap-y-16">
        <h2 className="text-3xl font-bold mt-8 highlight">Skills</h2>
        {/* Skills box */}
        <div className="w-full md:max-w-3xl max-w-xs flex flex-wrap items-center justify-center text-lg gap-8">
            {skills.map((skill) => (
            <div className="inline-flex flex-col items-center w-fit transform transition-transform duration-150 ease-in-out hover:scale-110">
                <img src={skill.img} alt={skill.title} className="md:w-24 md:h-24 w-16 h-16 " />
                <p className="text-center">{skill.title}</p>
            </div>
            ))}
        </div>
    </div>
    );
};

export default Skills;