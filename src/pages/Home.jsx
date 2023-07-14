import React from "react";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Banner from "../components/Banner";
import "./Home.css";
import SearchPackage from "../components/SearchPackage";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Banner />
      <SearchPackage/>
      <Packages />
    </div>
  );
};

export default Home;
