import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Gallery  from './App';
import ErrorPage from "./error-page";
import RandomApp from "./Random page/RandomApp";
import Root from "./routes/root";
import Query from "./Query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/random",
    element: <RandomApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/query",
    element: <Query />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
