import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import './scss/tailwind.scss'

import homeContentPl from './content/pl/home.json';
import homeContentEn from './content/en/home.json';
import cvEn from './assets/files/cv_en.pdf';
import cvPl from './assets/files/cv_pl.pdf';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home content={ homeContentPl } file={cvPl} />,
  },
  {
    path: "/en",
    element: <Home content={ homeContentEn } file={cvEn} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
