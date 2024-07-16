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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed-books",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/page-to-read",
        element:<PageToRead></PageToRead>
      },
      {
        path:'/home/:bookId',
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch('/public/DATA.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
