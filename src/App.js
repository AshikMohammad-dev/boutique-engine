import { useEffect } from "react";
import { BRAND } from "./config/brand";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import WhatsAppFloat from "./components/layouts/WhatsAppFloat";

import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import StudioSection from "./components/sections/StudioSection";
import Testimonials from "./components/sections/Testimonials";
import VisitSection from "./components/sections/VisitSection";

import "./App.css";

function App() {

  useEffect(() => {
    // Set Page Title
    document.title = BRAND.seo.title;

    // Set Meta Description
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = BRAND.seo.description;

    // Set Favicon
    let link =
      document.querySelector("link[rel~='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.type = "image/png";
    link.href = BRAND.seo.favicon;

  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <StudioSection />
      <Testimonials />
      <VisitSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;