import React from "react";
import logo from '../assets/image/logo.png'

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-neutral text-white space-y-4">
          {/* Sidebar content here */}
          <div className="flex items-center   rounded">
          <img   src={logo} alt="" className="md:w-20 md:h-16 w-10 h-10" />
            <div className="flex flex-col">
            <p className="normal-case  text-white tracking-tighter  md:text-xl">Weight Loss</p>
            <p className="text-base md:font-semibold  text-white tracking-tighter md:tracking-widest uppercase">A c a d e m y</p>
            </div>
          </div>
          <div className="divider bg-white h-1"></div>
          <li>Dashboard</li>
          <li>My Selected Classes</li>
          <li>My Enrolled Classes</li>
          <li>Add a Class</li>
          <li>My Classes</li>
          <li>Manage Classes</li>
          <li>Manage Users</li>
          <div className="divider bg-white h-1"></div>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
