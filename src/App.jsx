// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CNCturning from "./components/CNCturning";
import CNCmilling from "./components/CNCmilling";
import LaserCuttingAndBending from "./components/LaserCuttingAndBending";
import About from "./components/About";
import Contact from "./components/Contact";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [homeNavbar, setHomeNavbar] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar homeNavbar={homeNavbar} />
      <Routes>
        <Route path="/">
          <Route index element={<Home setHomeNavbar={setHomeNavbar} />} />
          <Route path="CNCturning" element={<CNCturning />} />
          <Route path="CNCmilling" element={<CNCmilling />} />
          <Route
            path="LaserCuttingAndBending"
            element={<LaserCuttingAndBending />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
