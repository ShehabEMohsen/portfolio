import React from "react";
import "./parts.css";

type SkillsProps = {
  photo: string;
  name: string;
};

const Project: React.FC<SkillsProps> = ({ photo }) => {
  return (
    <div className="container">
      <img src={photo} alt="photo" className="image" />
    </div>
  );
};

export default Project;
