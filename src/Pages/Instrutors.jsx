import React from "react";
import BannarCover from "./BannerCover/BannarCover";
import banner from "../../src/assets/image/banner3.jpg";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Instrutors = () => {
  const loaderInstritor = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Instrutors - Weight Loss Academy</title>
      </Helmet>
      <BannarCover
        image={banner}
        title="Our Instrutors"
        subTitle="Explore our world class Instrutors"
      ></BannarCover>

      <div className="grid grid-cols-1 md:grid-cols-3  md:ml-20 mb-10">
        {loaderInstritor.map((instrutor) => (
          <div key={instrutor._id} className="card w-80 bg-gray-200 shadow-xl">
            <figure>
              <img src={instrutor.photoUrl} alt="intructor" className="p-3" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instrutor.name}</h2>
              <p>{instrutor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instrutors;
