import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Instrutors from "../Pages/Instrutors";
import Classes from "../Pages/Classes";
import Error from "../Pages/Error";



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
          element:<Instrutors></Instrutors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        }
      ]
    },
  ]);
