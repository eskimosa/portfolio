import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/EvgeniaMelnikova_CV.pdf";
    link.download = "EvgeniaMelnikova_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="my-10 overflow-x-hidden transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto w-[90%]">
        <h1 className="text-4xl dark:text-neutral-300 font-bold text-center mb-4 font-sen">
          <span className="border-b-4 border-[#7e22ce]">About Me</span>
        </h1>

        <div className="flex flex-col md:flex-row items-stretch my-10 leading-[1.6] tracking-[1.5px] text-2xl">
          {/* About Pic */}
          <div
            className="flex justify-center md:justify-start"
            data-aos="fade-right"
          >
            <img
              src="./assets/profile.jpg"
              alt="profile photo of Evgenia"
              className="w-3/5 md:w-3/5 max-w-screen-lg object-cover rounded"
            />
          </div>

          {/* About Text */}
          <div
            className="about-text flex flex-col justify-start items-start w-[90%]"
            data-aos="fade-left"
          >
            <p className="my-0 dark:text-neutral-300 text-xl tracking-wide leading-relaxed">
              Hey there! I'm Evgenia, a Fullstack Engineer with a passion for
              both the technical and creative sides of development. From growing
              up under the Northern Lights in Chukotka, where polar bears roam,
              to immersing myself in the vibrant tech scene of Barcelona – with
              an exciting detour through Moscow, where I studied finance and
              dove into the dance culture – my journey has been anything but
              ordinary.
            </p>

            <p className="my-4 dark:text-neutral-300 text-xl tracking-wide leading-relaxed">
              As my path led me to Barcelona, I shifted my focus from analyzing
              lines of data and choreography on a stage to lines of code on a
              web page.
            </p>

            <p className="my-4 dark:text-neutral-300 text-xl tracking-wide leading-relaxed">
              With a background in business analytics and a love for
              problem-solving, I now focus on building dynamic, user-friendly
              web applications.
            </p>

            <p className="my-4 dark:text-neutral-300 text-xl tracking-wide leading-relaxed">
              I'm excited to make the leap and continue refining my skills with
              the right company.
            </p>

            <div>
              {/* Socials Container */}
              <ul className="flex justify-center dark:text-neutral-300 space-x-10">
                {/* GitHub */}
                <li className="flex-basis-1/5 text-center">
                  <a
                    href="https://github.com/eskimosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    title="Go to Evgenia's Github"
                  >
                    <span
                      className="text-4xl hover:scale-110 hover:text-[#7e22ce] transition-transform duration-300"
                      tabIndex="0"
                    >
                      <i className="fab fa-github"></i>
                    </span>
                    <p className="text-xs font-light mt-0.5 leading-normal text-black dark:text-white">
                      GitHub
                    </p>
                  </a>
                </li>

                {/* LinkedIn */}
                <li className="flex-basis-1/5 text-center">
                  <a
                    href="https://www.linkedin.com/in/evgeniya-melnikova/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    title="Go to Evgenia's LinkedIn"
                  >
                    <span
                      className="text-4xl hover:scale-110 hover:text-[#7e22ce] transition-transform duration-300"
                      tabIndex="0"
                    >
                      <i className="fab fa-linkedin"></i>
                    </span>
                    <p className="text-xs font-light mt-0.5 leading-normal text-black dark:text-white">
                      LinkedIn
                    </p>
                  </a>
                </li>

                {/* CV */}
                <li className="flex-basis-1/5 text-center">
                  <button
                    onClick={handleDownloadCV}
                    aria-hidden="true"
                    title="Download Evgenia's CV"
                  >
                    <span
                      className="text-4xl hover:scale-110 hover:text-[#7e22ce] transition-transform duration-300"
                      tabIndex="0"
                    >
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <p className="text-xs font-light mt-0.5 leading-normal text-black dark:text-white">
                      Resume
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
