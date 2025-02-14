import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTensorflow, SiFirebase, SiSocketdotio, SiTailwindcss } from "react-icons/si";
export const Projects = () => {
  const projects = [{
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiNodedotjs,
      name: "Node.js"
    }, {
      icon: SiMongodb,
      name: "MongoDB"
    }, {
      icon: SiTailwindcss,
      name: "Tailwind"
    }],
    features: ["Real-time inventory", "Payment integration", "Admin dashboard"],
    github: "#",
    demo: "#"
  }, {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiTypescript,
      name: "TypeScript"
    }, {
      icon: SiTensorflow,
      name: "TensorFlow"
    }],
    features: ["Real-time analytics", "AI predictions", "Custom reports"],
    github: "#",
    demo: "#"
  }, {
    title: "Social Media App",
    description: "Real-time social platform with modern features",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiFirebase,
      name: "Firebase"
    }, {
      icon: SiSocketdotio,
      name: "Socket.io"
    }],
    features: ["Real-time chat", "User profiles", "Media sharing"],
    github: "#",
    demo: "#"
  }];
  return <section id="projects" className="min-h-screen w-full bg-slate-950 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500/80 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href={project.demo} className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500/80 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => <div key={i} className="flex items-center gap-1 bg-purple-500/10 px-3 py-1.5 rounded-full">
                      <tech.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400">
                        {tech.name}
                      </span>
                    </div>)}
                </div>
                <div className="space-y-2">
                  {project.features.map((feature, i) => <div key={i} className="flex items-center gap-2 text-gray-400">
                      <ArrowUpRight className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">{feature}</span>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};