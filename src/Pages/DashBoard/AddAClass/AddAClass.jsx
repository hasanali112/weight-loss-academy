import React, { useContext } from "react";
import './AddAClass.css'
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddAClass = () => {
    const{user}= useContext(AuthContext)
    const {register, handleSubmit,  formState: { errors }} = useForm();
    
      const onSubmit = (data) =>{
        console.log(data)
      }
  return (
    <div className="w-full h-full">
      <div id="title" className="h-40 p-10">
           <h1 className="text-4xl font-bold text-center w-1/2 mx-auto bg-white bg-opacity-30 p-3">Add A Class</h1>
      </div>
     
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full mr-10  shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <div className="grid grid-cols-2 gap-5">
             <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("name", { disabled: false})}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bordered"
                readOnly 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
                readOnly 
              />
            </div>
             </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
            </div>
             <div className="grid grid-cols-2 gap-5">
             <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                type= "text"
                {...register("seat")}
                placeholder="Available seats"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
             </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddAClass;
