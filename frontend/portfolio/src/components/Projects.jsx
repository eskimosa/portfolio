import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/projects/");

        if (response.status === 200) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error("Error fetching project: ", error);
      }
    };
    fetchProjects();
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-10">
      <div className="max-w-[1180px] mx-auto w-[90%]">
        <div className="text-center mb-8">
          <h2 className="text-5xl dark:text-neutral-300 font-bold mb-4">
            <span className="border-b-4 border-[#7e22ce]">
              Current Projects
            </span>
          </h2>
          <p className="text-2xl dark:text-neutral-300 font-bold">
            Skills in progress, portfolio in motion.
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
                <h3 className="text-3xl dark:text-neutral-300 text-md tracking-wide leading-relaxed font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="my-0 dark:text-neutral-300 text-md tracking-wide leading-relaxed">
                  {project.description}
                </p>
                <h3 className="uppercase mt-4 text-lg font-semibold dark:text-neutral-300">
                  Made with:
                </h3>
                <div className="flex flex-wrap mt-2 space-x-4">
                  {project.technologies.split(",").map((tech, idx) => (
                    <i
                      key={idx}
                      title={tech}
                      className={`devicon-${tech.trim()}-plain text-black dark:text-white text-3xl mx-2`
                    }
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center space-x-4">
                  <span
                    onClick={() => handleVideoClick(project.video_url)}
                    className="uppercase font-semibold text-black dark:text-white border-b-4 border-transparent hover:border-[#7e22ce] cursor-pointer"
                    title="Project Demo"
                  >
                    See it in action
                  </span>

                  <span className="uppercase font-semibold text-black dark:text-white border-b-4 border-transparent">
                    |
                  </span>

                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase font-semibold text-black dark:text-white border-b-4 border-transparent hover:border-[#7e22ce] cursor-pointer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full h-[80vh] bg-neutral-900 rounded-lg p-6 max-w-5xl">
              <button
                onClick={closeVideo}
                className="absolute top-0 right-0 mt-2 mr-2 text-red-500 text-2xl"
              >
                &times;
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={selectedVideo}
                title="Project Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
