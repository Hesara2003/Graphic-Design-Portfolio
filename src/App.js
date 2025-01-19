import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/whyUs";
import "./App.css";


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Timeline />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;