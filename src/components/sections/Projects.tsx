import React from "react";
import "./sections.css";
import Suitcase from "../../assets/suitcase.png";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-12 h-screen w-full">
      <div className="w-full flex justify-center font-bold text-5xl text-darkpurple mt-16 mb-12">
        My Projects
      </div>
      <div className="grid grid-cols-2 gap-5 items-center justify-center">
        <div className="">
          <div className="image-area image-area-1 mb-5 flex flex-col">
            <div className="text-overlay">
              <p>Spotify Vinyl</p>
              <div className="text-description font-semibold">
                <p>
                  A music player that brings Spotify songs to life with a
                  spinning vinyl animation.
                </p>
              </div>
              <button className="button-36">Learn More</button>
            </div>
          </div>
          <div className="image-area image-area-2">
            <div className="text-overlay">
              <p>Admin Dashboard</p>
              <div className="text-description font-semibold">
                <p>
                  An admin dashboard that users can use to manage their
                  employees and customers.
                </p>
              </div>
              <button className="button-36">Learn More</button>
            </div>
          </div>
        </div>
        <div className="gap-5">
          <div className="image-area image-area-3 mb-5">
            <div className="text-overlay">
              <p className="text-4xl">Frontend Components Library</p>
              <div className="text-description font-semibold">
                <p>
                  A collection of reusable and modern frontend components, that
                  are updated regularly.
                </p>
              </div>
              <button className="button-36">Learn More</button>
            </div>
          </div>
          <div className="image-area image-area-4">
            <div className="text-overlay">
              <p>Campus51 Platform</p>
              <div className="text-description font-semibold">
                <p>
                  An educational web application to sell courses and workshops
                  with an LMS side to it.
                </p>
              </div>
              <button className="button-36">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
