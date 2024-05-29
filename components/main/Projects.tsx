import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          My Projects
        </h1>
      </div>
      <h1 className="text-[20px] font-semibold -right text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5" >All Projects & </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Rust chat app"
          description="this is a rust chat app the run rocket server/crate and a simple frontend."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This is a business and it solution multipurpose website."
        />
      </div>
    </div>
  );
};

export default Projects;
