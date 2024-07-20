import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components Layout/Root Components/Root';
import Home from './Components Layout/Main Components/Home/Home';
import ListedBooks from './Components Layout/Main Components/Listed Books/ListedBooks';
import PageToRead from './Components Layout/Main Components/Page to Read/PageToRead';
import BookDetails from './Components Layout/Main Components/Book Details/BookDetails';
import ErrorMessage from './Components Layout/Main Components/Error Message/ErrorMessage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/public/DATA.json'),
      },
      {
        path: "/page-to-read",
        element: <PageToRead></PageToRead>,
        loader: () => fetch('/public/DATA.json'),
      },
      {
        path: '/home/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/DATA.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
)
