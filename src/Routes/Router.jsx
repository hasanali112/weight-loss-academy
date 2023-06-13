import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Instrutors from "../Pages/Instrutors";
import Classes from "../Pages/Classes";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../LayOut/DashBoard";
import AddAClass from "../Pages/DashBoard/AddAClass/AddAClass";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import MySelectedClass from "../Pages/DashBoard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/DashBoard/MyEnrolledClass/MyEnrolledClass";
import FeedBack from "../Pages/DashBoard/FeedBack/FeedBack";
import Payment from "../Pages/DashBoard/Payment/Payment";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'instrutor',
          element:<Instrutors></Instrutors>,
          loader:()=> fetch ('http://localhost:5000/ourinstructor')
        },
        {
          path:'classes',
          element:<Classes></Classes>,
          loader: ()=> fetch('http://localhost:5000/ourclasses')
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'registration',
          element:<Registration></Registration>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        // Admin routes
        {
          path:'manageclasses',
          element:<ManageClass></ManageClass>
        },
        {
          path:'manageusers',
          element:<ManageUser></ManageUser>
        },
        {
          path:'feedback',
          element:<FeedBack></FeedBack>
        },
        //  Instrutors routes
        {
          path:'addaclass',
          element:<AddAClass></AddAClass>
        },
        {
          path:'myclass',
          element:<MyClass></MyClass>
        },
        // student routes
        {
          path:'myselectedclasses',
          element:<PrivateRoutes><MySelectedClass></MySelectedClass></PrivateRoutes> 
        },
        {
          path:'enroll',
          element:<Payment></Payment>
        },
        {
          path:'myenrolledclasses',
          element:<MyEnrolledClass></MyEnrolledClass>,
          loader:()=> fetch('http://localhost:5000/entrolledclasses')
        }
      ]
    }
  ]);
