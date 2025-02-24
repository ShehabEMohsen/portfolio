import React from "react";

type SkillsProps = {
  photo: string;
  name: string;
};

const Skills: React.FC<SkillsProps> = ({ photo, name }) => {
  return (
    <div className=" bg-background shadow-[0_3px_35px_rgb(0,0,0,0.2)] shadow-lightpurple pt-4 w-64 h-72 m-5 rounded-xl transition ease-in-out hover:-translate-y-2 hover:scale-110">
      <div className="flex justify-center items-center pt-10 w-full h-16">
        <img src={photo} className="w-16" alt="photo" />
      </div>
      <div className="text-darkpurple font-bold text-3xl flex justify-center mt-8">
        {name}
      </div>
    </div>
  );
};

export default Skills;
