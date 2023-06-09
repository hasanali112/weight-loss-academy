import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/login.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser, userUpdate } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one lowercase letter, one uppercase letter,  one digit and one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        userUpdate(data.name, data.photo)
          .then(() => {
            const userSave = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userSave),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account Created Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            reset();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse mt-40">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Registration now!</h1>
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            className="w-[600px] h-[600px]"
          />
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
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 pt-4">Name is required</p>
              )}
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
              {errors.email?.type === "required" && (
                <p className="text-red-600 pt-4">Email is required</p>
              )}
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
              {errors.password && (
                <span className="text-red-500">Photo url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              <FaEye
                onClick={() => setShow(!show)}
                className="-mt-8  ml-[350px]"
              ></FaEye>
              {errors.password?.type === "required" && (
                <p className="text-red-600 pt-4">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 pt-4">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 pt-4">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="-mt-8 ml-[350px]"
              ></FaEye>
              {errors.confirmPassword && (
                <span className="text-red-500 pt-4">Passwords must match</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <h3>
              Already have an account? Please
              <Link className="text-green-500" to="/login">
                LogIn
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
