import React from 'react';
import ScrambleText from './ScrambleText';

const Home = () => {
  return (
    <section className="welcome min-h-[90vh] flex flex-col justify-center overflow-x-hidden transition-all duration-200">
      <div className="max-w-[1180px] mx-auto w-[90%]">
        <div>
          <h1 className="text-5xl p-3/5 dark:text-neutral-300 font-bold uppercase leading-[1.2] whitespace-nowrap">
            <ScrambleText />
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl p-3 whitespace-nowrap">Fullstack</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl p-3 whitespace-nowrap">Web Developer</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
