import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code, Rocket } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTensorflow, SiFirebase, SiSocketdotio, SiTailwindcss } from "react-icons/si";
export const Projects = () => {
  const projects = [{
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React",
      color: "#61DAFB"
    }, {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "#339933"
    }, {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#47A248"
    }, {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "#06B6D4"
    }],
    features: ["Real-time inventory", "Payment integration", "Admin dashboard"],
    github: "#",
    demo: "#",
    category: "Full Stack"
  }, {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React",
      color: "#61DAFB"
    }, {
      icon: SiTypescript,
      name: "TypeScript",
      color: "#3178C6"
    }, {
      icon: SiTensorflow,
      name: "TensorFlow",
      color: "#FF6F00"
    }],
    features: ["Real-time analytics", "AI predictions", "Custom reports"],
    github: "#",
    demo: "#",
    category: "AI/ML"
  }, {
    title: "Social Media App",
    description: "Real-time social platform with modern features",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React",
      color: "#61DAFB"
    }, {
      icon: SiFirebase,
      name: "Firebase",
      color: "#FFCA28"
    }, {
      icon: SiSocketdotio,
      name: "Socket.io",
      color: "#010101"
    }],
    features: ["Real-time chat", "User profiles", "Media sharing"],
    github: "#",
    demo: "#",
    category: "Real-time"
  }];
  return <section id="projects" className="relative min-h-screen w-full bg-slate-950 px-6 py-20 overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in web development and design
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative">
              <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                  <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.4
              }} />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/20 backdrop-blur-sm">
                      <span className="text-xs font-medium text-purple-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a href={project.github} whileHover={{
                  scale: 1.1
                }} className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500/80 transition-colors backdrop-blur-sm">
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a href={project.demo} whileHover={{
                  scale: 1.1
                }} className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500/80 transition-colors backdrop-blur-sm">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <motion.div whileHover={{
                  rotate: 45
                }} transition={{
                  duration: 0.2
                }}>
                      <ArrowUpRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  </div>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => <motion.div key={i} whileHover={{
                  y: -2
                }} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">
                        <tech.icon className="w-4 h-4" style={{
                    color: tech.color
                  }} />
                        <span className="text-sm text-gray-300">
                          {tech.name}
                        </span>
                      </motion.div>)}
                  </div>
                  <div className="space-y-2">
                    {project.features.map((feature, i) => <div key={i} className="flex items-center gap-2 text-gray-400">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">{feature}</span>
                      </div>)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};