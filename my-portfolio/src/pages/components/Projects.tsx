import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide on small screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For screens larger than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Example projects data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the first project. It uses React, Node.js, and Tailwind CSS.",
      gif: "project1.gif",
      tech: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the second project. It uses Python and Flask.",
      gif: "project2.gif",
      tech: ["Python", "Flask"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the third project. It uses JavaScript and Firebase.",
      gif: "project3.gif",
      tech: ["JavaScript", "Firebase"],
    },
  ];

  return (
    <div id="projects" className="p-6 bg-gray-100 w-screen h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      {/* Slick Slider */}
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="p-4">
            {/* Project GIF */}
            <div className="relative">
              <img
                src={project.gif}
                alt={project.title}
                className="rounded-md md:w-3/5 md:h-96 w-full h-96 object-cover shadow-lg mr-auto ml-auto"
              />
            </div>

            {/* Project Description */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              {/* Technologies */}
              <div className="flex justify-center mt-3 space-x-2">
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
