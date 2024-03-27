import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PagesToRead from './../pages/PagesToRead';
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import Error from "../pages/Error";
import Home from "../pages/Home";
import KidsZone from './../pages/KidsZone';
import AboutUs from "../pages/AboutUs";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error/>,
      children:[
        {
            index:true,
            element: <Home />,
          loader: ()=> fetch("/books.json"),
        },
        {
          path: '/listedbooks',
          element: <ListedBooks />,
          loader: ()=> fetch("/books.json"),
          
        },
        {
          path: '/aboutus',
          element: <AboutUs />,
        },
        {
          path: '/pagestoread',
          element: <PagesToRead />,
        },
        {
          path: '/kidszone',
          element: <KidsZone />,
          loader: ()=> fetch("/kidsbooks.json"),
        },
        {
          path: '/kidszone/:id',
          element: <BookDetails />,
          loader: ()=> fetch('/kidsbooks.json')
        },
        {
          path: '/bookdetails/:id',
          element: <BookDetails />,
          loader: ()=> fetch('/books.json')
        },
      ]
        
      
    },
  ]);
