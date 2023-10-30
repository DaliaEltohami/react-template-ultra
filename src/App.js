import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/contact" element={<Contact />} exact></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
