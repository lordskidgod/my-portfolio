import React from "react";
import { Code2, Palette, Globe, Coffee } from "lucide-react";
export const About = () => {
  return <section id="about" className="min-h-screen w-full bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-full bg-purple-500/20 absolute blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" alt="Janindu Sudeekshana" className="w-full h-auto rounded-2xl relative z-10 hover:transform hover:scale-105 transition-transform" />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm Janindu Sudeekshana
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate developer who loves creating beautiful and
                functional web experiences. With a keen eye for design and a
                love for clean code, I transform ideas into reality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors">
                <Code2 className="w-8 h-8 text-purple-500 mb-2" />
                <h4 className="text-white font-medium mb-1">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  Writing maintainable and efficient code
                </p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors">
                <Palette className="w-8 h-8 text-purple-500 mb-2" />
                <h4 className="text-white font-medium mb-1">Creative Design</h4>
                <p className="text-gray-400 text-sm">
                  Crafting beautiful user interfaces
                </p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors">
                <Globe className="w-8 h-8 text-purple-500 mb-2" />
                <h4 className="text-white font-medium mb-1">Web Solutions</h4>
                <p className="text-gray-400 text-sm">
                  Building modern web applications
                </p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors">
                <Coffee className="w-8 h-8 text-purple-500 mb-2" />
                <h4 className="text-white font-medium mb-1">Always Learning</h4>
                <p className="text-gray-400 text-sm">
                  Staying up-to-date with tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};