"use client";

import LandingNavBar from "./components/LandingNavBar";
import Search from "./components/Search";


const HomePage = () => {
 

  return (
    <div className="flex">
      <div className="nav_container">
        <LandingNavBar />

        <Search />
      </div>
    </div>
  );
};

export default HomePage;
