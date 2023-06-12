import React, { useContext } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const Header = () => {
  const {user, userLogOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
      userLogOut()
      .then()
      .catch((error) => console.log(error));
    }

    const navItem =<>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/instrutor'>Instructors</Link></li>
      <li><Link to='/classes'>Classes</Link></li>
      {
        user ?<>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <><a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
           <img src={user.photoURL} referrerpolicy="no-referrer"  alt="" className="rounded-full mr-2 w-10"/>
         </a> <Tooltip id="my-tooltip" /></>
         <button onClick={handleLogOut} className="btn btn-outline btn-xs text-white">Log Out</button>
        </>:<>
        <Link to='/login'><button className="btn btn-outline btn-xs text-white">logIn</button></Link>
        </>
      }   
</>
    
  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-gray-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-500  rounded-box w-52"
          >
           {navItem}
          </ul>
        </div>
        <div className="md:ml-10 flex items-center md:px-2   bg-white rounded">
          <img   src={logo} alt="" className="md:w-20 md:h-16 w-10 h-10" />
        <Link to='/'> <div>
            <p className="normal-case  text-black tracking-tighter  md:text-xl">Weight Loss</p>
            <p className="text-base md:font-semibold  text-black tracking-tighter md:tracking-widest uppercase">Academy</p>
          </div>
          </Link> 
        </div>
      </div>
      <div className="navbar-end hidden lg:flex justify-center">
        <ul className="menu menu-horizontal text-base font-semibold items-center">
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Header;
