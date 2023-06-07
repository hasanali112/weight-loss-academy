import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mt-20">Login now!</h1>
          <Lottie animationData={groovyWalkAnimation} loop={true} className="w-[600px] h-[600px]"/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <h4>Have a new in Acadamy?<Link to='/registration'>Sign Up</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
