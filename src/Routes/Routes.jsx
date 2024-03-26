import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PagesToRead from './../pages/PagesToRead';
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ReadBooks from './../components/ReadBooks';
import WishlistBooks from './../components/WishlistBooks';



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
          children:[
            {
              path: '',
              element: <ReadBooks />,
            },
            {
              path: 'wishlistbooks',
              element: <WishlistBooks />,
            }
          ]
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
