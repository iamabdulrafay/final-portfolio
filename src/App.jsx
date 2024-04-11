import React from "react";
import HomePage from "./screens/HomePage";
import Footer from "./components/footer/Footer";
import { Outlet, useOutlet } from "react-router";

import Navigation from "./components/nav/Navigation";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
