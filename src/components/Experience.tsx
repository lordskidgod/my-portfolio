import React from "react";
import { Calendar, Briefcase, ArrowRight } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
export const Experience = () => {
  const experiences = [{
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc",
    period: "2022 - Present",
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
    }],
    achievements: ["Led team of 5 developers", "Improved performance by 40%", "Implemented CI/CD pipeline"]
  }, {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
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
    }],
    achievements: ["Built 3 major applications", "Reduced loading time by 60%", "Implemented new features"]
  }, {
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
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
    }],
    achievements: ["Developed 5+ websites", "Learned modern technologies", "Collaborated with team"]
  }];
  return <section id="experience" className="min-h-screen w-full bg-slate-950 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Experience
          </span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline dot with ping animation */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-6">
                <div className="w-4 h-4 bg-purple-500 rounded-full relative">
                  <div className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping"></div>
                </div>
              </div>
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="group bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-gray-800 hover:border-purple-500/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {exp.technologies.map((tech, i) => <div key={i} className="flex items-center gap-1 bg-purple-500/10 px-3 py-1.5 rounded-full">
                        <tech.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400">
                          {tech.name}
                        </span>
                      </div>)}
                  </div>
                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => <div key={i} className="flex items-center gap-2 text-gray-400">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <span>{achievement}</span>
                      </div>)}
                  </div>
                  <div className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium">
                    {exp.company}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
