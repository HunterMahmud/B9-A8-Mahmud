import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from './../pages/PagesToRead';



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1>error happened</h1>,
      children:[
        {
            path:'/',
            element: <Home />,
        },
        {
          path: '/listedbooks',
          element: <ListedBooks />,
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
