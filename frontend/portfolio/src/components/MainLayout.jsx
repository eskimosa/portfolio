import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./Projects";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900">
        <Navbar />

        <section id="home">
          <Home />
        </section>
        <section id="about">
          <Profile />
        </section>
        <section>
          <Skills />
        </section>
        <section id="projects">
            <Projects />
        </section>


        <button
          className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black fonr-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </main>
    </div>
  );
};

export default MainLayout;
