import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };
  const navItems = ["Home", "About", "Experience", "Projects", "Technologies", "Contact"];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/95 backdrop-blur-lg py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={e => handleNavClick(e, "home")} className="text-white text-2xl font-bold relative group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              JaNuK
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={e => handleNavClick(e, item.toLowerCase())} className={`text-gray-300 hover:text-white relative group py-2 transition-colors ${activeSection === item.toLowerCase() ? "text-white" : ""}`}>
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${activeSection === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </a>)}
            <div className="flex gap-4 ml-4 border-l pl-4 border-gray-800">
              <a href="https://github.com/lordskidgod/" className="text-gray-400 hover:text-purple-500 transition-all transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/janindu-karunathilaka" className="text-gray-400 hover:text-purple-500 transition-all transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-all transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <button className="md:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className={`md:hidden absolute left-0 right-0 top-full bg-slate-950/95 backdrop-blur-lg transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className="flex flex-col items-center gap-4 py-6 px-4">
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={e => handleNavClick(e, item.toLowerCase())} className={`text-gray-300 hover:text-white w-full text-center py-2 hover:bg-gray-800/50 rounded-lg transition-colors ${activeSection === item.toLowerCase() ? "text-white bg-gray-800/30" : ""}`}>
                {item}
              </a>)}
            <div className="flex gap-6 mt-4 pt-4 border-t border-gray-800 w-full justify-center">
              <a href="https://github.com/lordskidgod/" className="text-gray-400 hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/janindu-karunathilaka" className="text-gray-400 hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};