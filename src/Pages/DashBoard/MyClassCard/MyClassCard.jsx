import React from "react";

const MyClassCard = ({item}) => {
    const {image, className, availableSeat, instructorName, _id, price} =item
  return (
    <div>
      <div className="card w-80 bg-gray-200 rounded-none shadow-lg">
        <figure>
          <img
            src={image}
            alt="classImage"
            className="p-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>{instructorName}</p>
          <p>Available: {availableSeat}</p>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary btn-xs">Enrol Now</button>
            <button className="btn btn-primary btn-xs">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
