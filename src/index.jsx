import {StrictMode, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createHashRouter, RouterProvider} from "react-router-dom";

import Home from './pages/Home';
import Layout from './layouts/Default';

import "./i18n";
import './scss/tailwind.scss'

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="loading">
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
