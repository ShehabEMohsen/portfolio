import { useEffect } from "react";
import { projects } from "../data/projects";
import {useParams } from "react-router-dom";
import Tooltip from "../parts/Tooltip";
import Github from "../../assets/github.svg";
import Link from "../../assets/link.png";
import Back from "../../assets/backArrow.png";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <div className="pt-20 pb-40 px-96 text-darkpurple">
      <div className="mb-10 text-lg font-medium flex flex-row">
        <a href="/" className="flex flex-row w-full items-center gap-2">
          <img src={Back} className="w-4 h-4" /> Back{" "}
        </a>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row text-start items-center w-2/3">
          <div className="text-6xl font-bold mb-12">{project.name}</div>
          <div className="flex flex-col gap-4 text-xl">{project.year}</div>
        </div>
        <div className="flex flex-row h-8 ml-auto gap-2 justify-center items-center">
          <a href={project.github} target="_blank">
            <img src={Github} className="w-10" />
          </a>
          {project.link != "" && (
            <a href={project.link} target="_blank">
              <img src={Link} className="w-8" />
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
      <div
        className="stacking-container"
        style={{ height: `calc(100vh * ${project.images.length});` }}
      >
        {project.images.map((item, index) => (
          <div
            className="image mb-2 rounded-lg overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <img src={item} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
