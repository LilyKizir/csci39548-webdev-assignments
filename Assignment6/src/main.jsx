import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Gallery  from './App';
import ErrorPage from "./error-page";
import RandomApp from "./Random page/RandomApp";
import Root from "./routes/root";
import Query from "./Query";
import RandomStats from "./Random page/RandomStats";
import RandomAuthorData from "./Random page/RandomAuthorData";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

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
    children: [
        { path: 'stats', element: <RandomStats /> },
        { path: 'authorData', element: <RandomAuthorData /> },
    ],
  },
  {
    path: "/query",
    element: <Query />,
    errorElement: <ErrorPage />,
    children: [
        //{ path: '/Query/Stats', element: <RandomStats /> },
        //{ path: '/Query/AuthorData', element: <RandomAuthorData /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

