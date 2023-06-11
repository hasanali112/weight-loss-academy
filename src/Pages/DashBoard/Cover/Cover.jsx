import React from "react";

const Cover = ({ title, image }) => {
  return (
    <div>
      <div
        className="hero h-40 w-[900px]"
        style={{backgroundImage: `url(${image})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
