import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PagesToRead from './../pages/PagesToRead';
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import Error from "../pages/Error";
import Home from "../pages/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error/>,
      children:[
        {
            path:'/',
            element: <Home />,
        },
        {
          path: '/listedbooks',
          element: <ListedBooks />,
          loader: ()=> fetch("books.json"),
          
        },
        {
          path: '/pagestoread',
          element: <PagesToRead />,
        },
        {
          path: '/bookdetails/:id',
          element: <BookDetails />,
          loader: ()=> fetch('/books.json')
        },
      ]
    },
  ]);
