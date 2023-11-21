import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Gallery  from './App';
import RandomApp from './Random page/RandomApp'
import Root from "./routes/root";
import QueryApp from './Query-Page/QueryApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/random",
    element: <RandomApp/>,
  },
  {
    path: "/query",
    element: <QueryApp/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
