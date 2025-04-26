"use client";

import LandingNavBar from "./components/LandingNavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";


const HomePage = () => {
 

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="nav_container">
        <LandingNavBar />

        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
