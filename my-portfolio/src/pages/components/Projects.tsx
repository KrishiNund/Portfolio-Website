import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Projects = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // autoplay:true,
    // pauseOnHover:true,
  };

  // Example projects data
  const projects = [
    {
      id: 1,
      title: "TicTacTron",
      description: "It's a tic-tac-toe playing robot that consists of a Yahboom DOFBOT robotic arm, a camera module attached to it and using OpenCV libraries to perform template matching to identify the grid's contents.",
      gif: "tictactoeRobot.webp",
      tech: ["OpenCV", "Python", "RaspBerry Pi", "Template Matching"],
    },
    {
      id: 2,
      title: "Uno classification model",
      description: "A custom YOLOv8 model that has been trained to accurately identify uno cards (individual or bundle) as part as our robotics coursework.",
      gif: "unoModel.png",
      tech: ["Machine Learning", "Python", "Multiclass Classification", "Google Colab", "OpenCV"],
    },
    {
      id: 3,
      title: "Tuition website",
      description: "An after school tuition website to sell tuition classes as part of the FullStack Development coursework with frontend hosted using GitHub pages and backend hosted on Render.com.",
      gif: "tuitionweb.webp",
      tech: ["JavaScript", "Vue.js", "Render", "Dynamic Search"],
    },
    {
      id: 4,
      title: "Game Website",
      description: "A Space Shooters game website where the player can create an account, play the game and compare his highest score against other players.",
      gif: "gameweb.webp",
      tech: ["JavaScript", "Node.js", "Express.js"],
    },
    {
      id: 5,
      title: "Social Media Website",
      description: "A game community website centered around 'Honkai Star Rail' which allows the user to post text/images/videos, follow other people, like, dislike and comment on their posts.",
      gif: "socialweb.webp",
      tech: ["JavaScript", "Node.js", "Express.js", "Bootstrap"],
    },
    {
      id: 6,
      title: "Complex Calculator",
      description: "A multi-purpose calculator consisting of a basic, scientific, currency exchange, metric exchange and graphing calculator.",
      gif: "calc.webp",
      tech: ["Python", "OOP"],
    },
    {
      id: 7,
      title: "Hangman",
      description: "Simple Hangman game where user has to guess a word according to the hint given.",
      gif: "hangman.webp",
      tech: ["Java", "Java Swing"],
    },
    {
      id: 8,
      title: "Weather App",
      description: "Weather checing app where user can input a city name and they will obtain the temperature and weather description at that location.",
      gif: "weatherapp.webp",
      tech: ["C#", "Visual Studio", "Windows Form"],
    },

    
  ];

  return (
    <div id="projects" className="p-6 w-screen h-screen">
      <h2 className="text-3xl font-bold mb-8 highlight">Projects</h2>

      {/* Slick Slider */}
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="p-4 mb-10">
            {/* Project GIF */}
            <div className="relative">
              <img
                src={project.gif}
                alt={project.title}
                className="md:w-2/5 md:h-96 w-full h-96 object-contain mr-auto ml-auto bg-white"
              />
            </div>

            {/* Project Description */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-700 md:w-2/5 leading-relaxed text-center mr-auto ml-auto">{project.description}</p>
              {/* Technologies */}
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
