import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} exact></Route>
            <Route path="/contact" element={<Contact />} exact></Route>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
