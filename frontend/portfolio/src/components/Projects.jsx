import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1500, // duration of animations
    });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/projects/");

        if (response.status === 200) {
          console.log(response.data);
          setProjects(response.data);
        }
      } catch (error) {
        console.error("Error fetching project: ", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-[1180px] mx-auto w-[90%]">
        <div className="text-center mb-8">
          <h2 className="text-5xl dark:text-neutral-300 font-bold mb-4">
            Current Projects
          </h2>
          <p className="text-lg dark:text-neutral-300 font-bold">
            Skills grow. So will this portfolio.
          </p>
        </div>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center mb-8"
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
                data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                data-aos-duration="1500"
              >
                <img
                  src={`http://127.0.0.1:8000/${project.image}`}
                  alt={"Project photo"}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div
                className={`w-full md:w-1/2 p-4 ${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
                data-aos={index % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
                data-aos-duration="1500"
              >
                <h3 className="text-2xl dark:text-neutral-300 text-md tracking-wide leading-relaxed font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="my-0 dark:text-neutral-300 text-md tracking-wide leading-relaxed">
                  {project.description}
                </p>
                {/* Display Technologies */}
                <h3 className="mt-4 text-lg font-semibold dark:text-neutral-300">
                  Made with:
                </h3>
                <div className="flex flex-wrap mt-2">
                  {project.technologies.split(",").map((tech, idx) => (
                    <i
                      key={idx}
                      className={`devicon-${tech.trim()}-plain text-black dark:text-white text-3xl mx-2`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
