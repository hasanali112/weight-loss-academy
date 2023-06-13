import logo from '../assets/image/logo.png'
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaRegPlusSquare, FaRegUser, FaUserCheck, FaUserCog, FaUserFriends, FaUsersCog, } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import banner from '../assets/image/banner4.jpg'
import Cover from "../Pages/DashBoard/Cover/Cover";
import { Helmet } from 'react-helmet-async';




const DashBoard = () => {
  const [isAdmin] = useAdmin();


  
  

  return (
  <div>
        <Helmet>
            <title>Dashboard - Weight Loss Academy</title>
        </Helmet>
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
         <Cover image={banner} title='Dashboard'></Cover>
        <Outlet></Outlet>
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

          {
            isAdmin?.role=== 'admin'&& <>
             <li><Link><FaHome></FaHome>Admin Home</Link></li>
             <li><Link to='/dashboard/manageclasses'><FaUserCog></FaUserCog>  Manage Classes</Link></li>
              <li><Link to='/dashboard/manageusers'><FaUsersCog></FaUsersCog> Manage Users</Link></li>
            </>
            }
            
            
            
            {isAdmin?.role=== 'instrutor' && <>
            <li><Link><FaHome></FaHome>Instuctor Home</Link></li>
            <li><Link to='/dashboard/addaclass'><FaRegPlusSquare></FaRegPlusSquare> Add a Class</Link></li>
            <li><Link to='/dashboard/myclass'><FaRegUser></FaRegUser> My Classes</Link></li>
            </>
            }    
            
            {isAdmin?.role=== 'student'&& (<>
            <li><Link><FaHome></FaHome>Student Home</Link></li>
            <li><Link to='/dashboard/myselectedclasses'><FaUserFriends></FaUserFriends> My Selected Classes</Link></li>
            <li><Link to='/dashboard/myenrolledclasses'><FaUserCheck></FaUserCheck>  My Enrolled Classes</Link></li>
            </>)
          }
          <div className="divider bg-white h-1"></div>
          <li><Link to='/'><FaHome></FaHome>Home</Link></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default DashBoard;
