import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiGit, SiDocker, SiAmazonaws, SiFirebase } from "react-icons/si";
const technologies = [{
  icon: SiReact,
  name: "React",
  color: "#61DAFB"
}, {
  icon: SiNodedotjs,
  name: "Node.js",
  color: "#339933"
}, {
  icon: SiTypescript,
  name: "TypeScript",
  color: "#3178C6"
}, {
  icon: SiJavascript,
  name: "JavaScript",
  color: "#F7DF1E"
}, {
  icon: SiMongodb,
  name: "MongoDB",
  color: "#47A248"
}, {
  icon: SiPostgresql,
  name: "PostgreSQL",
  color: "#4169E1"
}, {
  icon: SiTailwindcss,
  name: "Tailwind",
  color: "#06B6D4"
}, {
  icon: SiNextdotjs,
  name: "Next.js",
  color: "#000000"
}, {
  icon: SiGit,
  name: "Git",
  color: "#F05032"
}, {
  icon: SiDocker,
  name: "Docker",
  color: "#2496ED"
}, {
  icon: SiAmazonaws,
  name: "AWS",
  color: "#FF9900"
}, {
  icon: SiFirebase,
  name: "Firebase",
  color: "#FFCA28"
}];
export const Technologies = () => {
  return <section id="technologies" className="min-h-screen w-full bg-slate-950 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Technologies
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -10
        }} className="relative group">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative flex flex-col items-center">
                  <tech.icon className="w-16 h-16 mb-4" style={{
                color: tech.color
              }} />
                  <span className="text-gray-300 font-medium text-lg">
                    {tech.name}
                  </span>
                  {/* Hover Effect Circle */}
                  <motion.div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};