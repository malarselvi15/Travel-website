import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import LearnMore from "./components/LearnMore";
import Contact from "./components/Contact"; // ✅ Contact page
import Login from "./components/Login"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Contact */}
       <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
