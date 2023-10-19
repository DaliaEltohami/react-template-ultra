import React, { Component } from "react";
import Home from "./components/home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default App;
