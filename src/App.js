import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutSection from "./components/aboutUs";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/whyUs";
import Testimonials from "./components/Testimonials";
import ClientLogos from "./components/clientLogo";
import FAQ from "./components/faq";
import BlogSection from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BentoGallery from "./components/Gallery";
import LoadingScreen from "./components/LoadingScreen";
import PortfolioSection from "./components/PortraitGallery";
import "./App.css";

const App = () => {
  return (
    <div>
      <LoadingScreen />
      <NavBar />
      <Hero />
      <AboutSection />
      <Services />
      <Timeline />
      <Projects />
      <PortfolioSection />
      <WhyChooseUs />
      {/*<BentoGallery />*/}
      <Testimonials />
      <ClientLogos />
      <FAQ />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
