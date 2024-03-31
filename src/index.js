import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./sections/Nav/Nav";
import Error from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Nav />
        <div className="text-3xl text-center mt-20 bg-rose-400">profile</div>
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <Error />
      </>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
