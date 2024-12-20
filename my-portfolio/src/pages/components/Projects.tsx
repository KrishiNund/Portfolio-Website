import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Projects = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplaySpeed: 8000,
    pauseOnHover:true,
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
    <section id="projects" className="px-6 min-h-screen">
      <div className="bg-gray-200 h-16 w-1 rounded-full dark:bg-opacity-50 mr-auto ml-auto" style={{opacity: 1, transform: "none", marginTop:-40}}></div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold highlight text-gray-800 mb-8 mt-10">
          Projects
        </h2>

        {/* Carousel */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center px-6">
              {/* Project Media */}
              <div className="relative w-fit rounded-lg overflow-hidden shadow-lg mr-auto ml-auto">
                <img
                  src={project.gif}
                  alt={project.title}
                  className="lg:w-full lg:h-96 w-fit object-contain mr-auto ml-auto bg-white"
                />
              </div>

              {/* Project Details */}
              <div className="mt-6 max-w-3xl text-center mr-auto ml-auto">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-700 leading-relaxed px-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
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
    </section>
  );
};

export default Projects;
