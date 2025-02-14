import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Contact } from "./components/Contact";
export function App() {
  return <div className="bg-slate-950 min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
    </div>;
}