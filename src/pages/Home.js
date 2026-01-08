import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home({ navigate }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar navigate={navigate} />
      <Hero navigate={navigate} />
      <Features />
      <UseCases />
      <CTA navigate={navigate} />
      <Footer />
      {showBackToTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}
    </>
  );
}

export default Home;
