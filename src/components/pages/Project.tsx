import React from "react";
import { projects } from "../data/projects";
import { href, useParams } from "react-router-dom";
import Tooltip from "../parts/Tooltip";
import Github from "../../assets/github.svg";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <div className="py-40 px-96 text-darkpurple">
      <div className="flex flex-row ">
        <div className="flex flex-row text-center items-center">
          <div className="text-6xl font-bold mb-12">{project.name}</div>
          <div className="flex flex-col gap-4 text-xl">{project.year}</div>
        </div>
        <div className="flex flex-row h-8 ml-auto gap-2">
          <a href={project.github} target="_blank">
            <img src={Github} />
          </a>
          {project.link != "" && (
            <a href={project.link} target="_blank">
              <img src={Github} />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-2xl font-bold">Description</span>
        <span className="text-xl text-justify">{project.desc}</span>
      </div>
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-2xl font-bold">Technology Used</span>
        <span className="text-xl flex flex-row gap-6">
          {project.tech.map((item) => {
            const [name, image] = Object.entries(item)[0];
            return (
              <Tooltip text={name}>
                <div>
                  <img src={image} className="w-12" />
                </div>
              </Tooltip>
            );
          })}
        </span>
      </div>
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-2xl font-bold">My Role</span>
        <ul className="text-xl text-justify">
          {project.role.map((item) => (
            <li>- {item}</li>
          ))}
        </ul>
      </div>

      {project.images.map((item, index) => (
        <div className="images mb-2 rounded-lg overflow-hidden">
          <img src={item} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default Project;
