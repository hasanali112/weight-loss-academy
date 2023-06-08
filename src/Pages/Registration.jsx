import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Registration = () => {
  const{createUser, userUpdate} = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const[showPass, setShowPass] = useState(false)

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
    const { register, handleSubmit, reset,  formState: { errors } } = useForm(formOptions);
    
    const onSubmit = data => {
      createUser(data.email, data.password)
      .then(result=>{
        const createdUser = result.user;
        console.log(createdUser)
        userUpdate(data.name, data.photo)
        .then(()=>{
          reset()
        })
        .catch(error=>{
          console.log(error)
        })
      })
      .catch(error=>{
        console.log(error)
      })
      
    };



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
                 type={show ? 'text' : 'password'}
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
               <FaEye onClick={()=> setShow(!show)} className="-mt-8  ml-[350px]"></FaEye>
              {errors.password && <span className="text-red-500">Password must contain at least one lowercase letter, one uppercase letter,  one digit and one special character</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                {...register("confirmPassword", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
               <FaEye onClick={()=> setShowPass(!showPass)} className="-mt-8 ml-[350px]"></FaEye>
               {errors.confirmPassword && <span className="text-red-500">Passwords must match</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <h3>Already have an account? Please <Link className='text-green-500' to='/login'>LogIn</Link></h3>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Registration;