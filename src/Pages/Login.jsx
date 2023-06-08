import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye } from 'react-icons/fa';


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
      loginUser(data.email, data.password)
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        reset()
      })
      .catch(error=>{
        console.log(error)
      })
    };



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
                type={show ? 'text' : 'password'}
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              <FaEye onClick={()=> setShow(!show)} className="-mt-8 ml-72"></FaEye>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <h4 className="text-center mb-4">New in Acadamy? <Link to='/registration' className="text-green-500">Sign Up</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
