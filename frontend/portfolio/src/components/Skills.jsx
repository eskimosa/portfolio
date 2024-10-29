import React from "react";

const Skills = () => {
  return (
    <section className=" my-40 overflow-x-hidden transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto w-[90%]">
        <h2 className="text-4xl dark:text-neutral-300 font-bold text-center mb-4 font-sen">
          <span className="border-b-4 border-[#7e22ce]">Skills</span>
        </h2>
      </div>
      <ul className="flex flex-wrap my-[6%] mx-auto">
        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-python-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            PYTHON
          </p>
        </li>
        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-javascript-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            JAVASCRIPT
          </p>
        </li>
        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-c-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            C
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-html5-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            HTML5
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-djangorest-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            DJANGO REST FRAMEWORK
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-react-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            REACT
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-django-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            DJANGO
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-css3-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            CSS
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-docker-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            DOCKER & DOCKER COMPOSE
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-git-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            GIT
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-githubactions-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            GITHUB ACTIONS
          </p>
        </li>
        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="devicon-amazonwebservices-plain text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            AWS EC2
          </p>
        </li>

        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300">
            <i className="fas fa-terminal text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-loose text-black dark:text-white">
            Terminal
          </p>
        </li>
        <li className="basis-[23%] m-2 p-2 text-center">
          <span className="text-6xl block hover:scale-110 transition-transform duration-300 ">
            <i className="fas fa-database text-black dark:text-white"></i>
          </span>
          <p className="text-sm font-light mt-0.5 leading-normal text-black dark:text-white">
            REST APIs
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
