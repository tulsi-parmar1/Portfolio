import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import Home from "./Components/Home.jsx";
import Skills from "./Components/Skills.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from "./Components/Project.jsx";
import Certificate from "./Components/Certificate.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
