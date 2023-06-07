import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Registration = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,'Password must contain at least one lowercase letter, one uppercase letter,  one digit and one special character'
        ),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')
        
});
   const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit,  formState: { errors } } = useForm(formOptions);
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
              {errors.password && <span className="text-red-500">Password must contain at least one lowercase letter, one uppercase letter,  one digit and one special character</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
               {errors.confirmPassword && <span className="text-red-500">Passwords must match</span>}
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