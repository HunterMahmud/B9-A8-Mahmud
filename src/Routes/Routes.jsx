import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1>error happened</h1>,
      children:[
        {
            path:'/',
            element: <Home />
        }
      ]
    },
  ]);
