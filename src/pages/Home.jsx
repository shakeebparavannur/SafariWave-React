import React from "react";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Banner from "../components/Banner";
import "./Home.css";
import SearchPackage from "../components/SearchPackage";
import FeturedPackages from "../components/FeturedPackages";

const Home = () => {
  return (
    <div className="Home">
      
      <Banner />
      <SearchPackage/>
      <Packages />
      <FeturedPackages/>
    </div>
  );
};

export default Home;
