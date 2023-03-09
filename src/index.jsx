import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import './scss/tailwind.scss'

import homeContent from './content/home.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home content={ homeContent } />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
