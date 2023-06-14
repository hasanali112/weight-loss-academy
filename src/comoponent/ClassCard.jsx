import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

const ClassCard = ({ item }) => {
  const { photoUrl, className, availableSeat, instructorName, _id, price } =
    item;
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelected = (item) => {
    console.log(item);
    const selectedClass = {
      classItemId: _id,
      image: photoUrl,
      className: className,
      price: price,
      availableSeat: availableSeat,
      instructorName,
      email: user?.email
    };
    console.log(selectedClass);
    if (user) {
      fetch("https://weight-loss-server.vercel.app/myselectedclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: "Please log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div style={{backgroundColor:`${availableSeat == 0 ? 'red' : 'white'}`}} className="card w-96  shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {className}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{instructorName}</p>
        <p>Available Seat:{availableSeat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link>
            <button
              disabled={isAdmin?.role === "admin" && "instrutor" || availableSeat== 0}
              onClick={() => handleSelected(item)}
              className="btn btn-xs badge badge-outline"
            >
              Select Class
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
