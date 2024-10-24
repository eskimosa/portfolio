import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/projects/');

                if(response.status === 200) {
                    console.log(response.data);
                    setProjects(response.data);
                }
            } catch (error) {
                console.error('Error fetching project: ', error);
            }
        }; fetchProjects();
    }, []);

  return (
    <section className="my-40 overflow-x-hidden transition-colors duration-200">
    <div className="text-right"></div>
    <div className="container m-auto">
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects to display</p>
      )}
    </div>
  </section>
  )
}

export default Projects;