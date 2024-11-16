"use client";
import React, { useEffect, useState } from "react";
import Header from "./organisms/header";
import Footer from "./organisms/Footer";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <Header />
      </div>

      <main className="flex-grow pt-16 mt-14">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
