import React from "react";
import Work from "../Work";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";
import Portfolio from "../Portfolio";
import Profile from "../Profile";
import About from "../About";

function Index() {
  return (
    <div>
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
}
export default Index;
