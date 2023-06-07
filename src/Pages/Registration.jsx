import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse mt-40">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Registration now!</h1>
          <Lottie animationData={groovyWalkAnimation} loop={true} className="w-[600px] h-[600px]"/>
        </div>
        <div className="card flex-shrink-0 w-full mr-10 max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
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
              {errors.password && <span className="text-red-500">Photo url is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="Password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Registration;