import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = ()=>{
        googleSignIn()
        .then(result=>{
            const googleUsered = result.user;
            console.log(googleUsered)
            navigate(from, { replace: true });
        })
    }

  return (
    <div>
      <div className="divider">OR, Login With</div>
      <div className="w-full text-center mb-4">
        <button onClick={handleGoogle} className="btn btn-circle btn-outline">
           <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;