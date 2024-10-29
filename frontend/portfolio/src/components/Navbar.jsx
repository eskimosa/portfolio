import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-1 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="md:ml-auto">
              <div className="flex space-x-2">
              <a href="#home" className="dark:text-neutral-300 font-bold hover:bg-purple-700 hover:text-white rounded-md px-3 py-2">
                  Home
                </a>
                <a href="#about" className="dark:text-neutral-300 font-bold hover:bg-purple-700 hover:text-white rounded-md px-3 py-2">
                  About
                </a>
                <a href="#projects" className="dark:text-neutral-300 font-bold hover:bg-purple-700 hover:text-white rounded-md px-3 py-2">
                  Projects
                </a>
                <a href="#contacts" className="dark:text-neutral-300 font-bold hover:bg-purple-700 hover:text-white rounded-md px-3 py-2">
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
