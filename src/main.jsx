import React from "react";

import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./screens/HomePage.jsx";
import Projects from "./screens/project/Projects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
