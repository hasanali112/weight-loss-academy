import React from "react";

const BannarCover = ({title, subTitle, image}) => {
  return (
    <div>
      <div
        className="hero h-96 mb-10"
        style={{backgroundImage: `url(${image})`, backgroundSize:'cover'}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannarCover;
