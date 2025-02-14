import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ArrowRight, Clock, Award, Users, Target } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiGit, SiDocker } from "react-icons/si";
export const Experience = () => {
  const experiences = [{
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc",
    period: "2022 - Present",
    duration: "2 years",
    description: "Leading frontend development team and implementing modern web solutions",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiTypescript,
      name: "TypeScript"
    }, {
      icon: SiTailwindcss,
      name: "Tailwind"
    }, {
      icon: SiNextdotjs,
      name: "Next.js"
    }],
    achievements: [{
      text: "Led team of 5 developers",
      icon: Users
    }, {
      text: "Improved performance by 40%",
      icon: Target
    }, {
      text: "Implemented CI/CD pipeline",
      icon: ArrowRight
    }],
    highlights: ["Team Leadership", "Performance Optimization", "Architecture Design"]
  }, {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    duration: "2 years",
    description: "Developed and maintained full-stack applications using React and Node.js",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiNodedotjs,
      name: "Node.js"
    }, {
      icon: SiJavascript,
      name: "JavaScript"
    }, {
      icon: SiDocker,
      name: "Docker"
    }],
    achievements: [{
      text: "Built 3 major applications",
      icon: Target
    }, {
      text: "Reduced loading time by 60%",
      icon: Clock
    }, {
      text: "Implemented new features",
      icon: Award
    }],
    highlights: ["Full Stack Development", "Performance Tuning", "System Design"]
  }, {
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    duration: "1 year",
    description: "Worked on various web development projects and learned modern technologies",
    technologies: [{
      icon: SiReact,
      name: "React"
    }, {
      icon: SiNextdotjs,
      name: "Next.js"
    }, {
      icon: SiJavascript,
      name: "JavaScript"
    }, {
      icon: SiGit,
      name: "Git"
    }],
    achievements: [{
      text: "Developed 5+ websites",
      icon: Target
    }, {
      text: "Learned modern technologies",
      icon: Award
    }, {
      text: "Collaborated with team",
      icon: Users
    }],
    highlights: ["Web Development", "Modern Technologies", "Team Collaboration"]
  }];
  return <section id="experience" className="relative min-h-screen w-full bg-slate-950 px-6 py-20 overflow-hidden">
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
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and engineering
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 rounded-full"></div>
          {experiences.map((exp, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? 50 : -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-6">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative">
                  <div className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping"></div>
                  <div className="absolute -left-24 md:left-8 whitespace-nowrap text-sm text-purple-400">
                    {exp.duration}
                  </div>
                </div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <motion.div whileHover={{
              scale: 1.02
            }} className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((highlight, i) => <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        {highlight}
                      </span>)}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4 p-3 bg-gray-900/50 rounded-lg">
                    {exp.technologies.map((tech, i) => <div key={i} className="flex items-center gap-1.5 text-gray-400 group-hover:text-purple-400 transition-colors">
                        <tech.icon className="w-5 h-5" />
                        <span className="text-sm">{tech.name}</span>
                      </div>)}
                  </div>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => <div key={i} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                        <achievement.icon className="w-4 h-4 text-purple-500" />
                        <span>{achievement.text}</span>
                      </div>)}
                  </div>
                </motion.div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};