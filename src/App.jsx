import "./App.css";
import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Information from "./components/information/Information.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="main">
        <Information />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
