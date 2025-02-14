import React from "react";
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
              <span className="text-purple-500 font-medium mb-4 block animate-fade-in">
                Hi, I'm JaNuK
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Code Ideas Into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Digital Reality
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Full-stack developer specializing in React and modern web
                technologies. Creating innovative solutions with clean code and
                creative design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500/10 transition-all">
                  Download CV
                </button>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://github.com/lordskidgod/" className="text-gray-400 hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
                <a href="https://www.linkedin.com/in/janindu-karunathilaka" className="text-gray-400 hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-all transform hover:-translate-y-1">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Section (Larger Image & Glow Fix) */}
            <div className="relative flex justify-center">
              {/* Outer Glow Effect (Circle & Blur) */}
              <div className="absolute w-60 h-60 rounded-full bg-purple-500/20 blur-3xl"></div>

              {/* Image Wrapper with Gradient Border */}
              <div className="relative bg-gradient-to-r p-[4px] from-purple-500 to-pink-500 rounded-full">
                <img src="https://media.discordapp.net/attachments/1273210879126667314/1306173548800249886/jk.png?ex=67afa729&is=67ae55a9&hm=fe2bc95c72e9f29b9858a4d8d3f3ec4b3d764db99a5f567d79ec66d2fc2ea873&=&format=webp&quality=lossless&width=468&height=468" alt="Janindu Karunathilaka - Developer" className="w-100 h-100 object-cover rounded-full relative z-10 transition-transform duration-300" />
              </div>

              {/* Bottom Right Glow Effect */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>

          </div>
        </div>
      </div>
    </section>;
};