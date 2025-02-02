import React from "react";

import ProjectCard from '@/components/projects/projectcard';

const projects = () => {
  return (
    <div className="my-10">
      <h1 className="font-bold text-3xl text-sky-500 text-center mb-5">Project Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          Array.from({ length: 5 }).map((_, index) => (
            <ProjectCard key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default projects;
