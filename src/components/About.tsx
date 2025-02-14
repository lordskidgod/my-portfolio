import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Coffee, Briefcase, GraduationCap, Award, Users } from "lucide-react";
export const About = () => {
  const stats = [{
    value: "5+",
    label: "Years Experience",
    icon: Briefcase
  }, {
    value: "50+",
    label: "Projects Completed",
    icon: Code2
  }, {
    value: "20+",
    label: "Happy Clients",
    icon: Users
  }, {
    value: "3+",
    label: "Awards",
    icon: Award
  }];
  const skills = [{
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and efficient code with best practices",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful and intuitive user interfaces",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: Globe,
    title: "Web Solutions",
    description: "Building modern and scalable web applications",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: Coffee,
    title: "Always Learning",
    description: "Staying up-to-date with latest technologies",
    color: "from-orange-500 to-yellow-500"
  }];
  return <section id="about" className="relative min-h-screen w-full bg-slate-950 px-6 py-20 overflow-hidden">
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with creativity
            and precision
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r p-2 from-purple-500 to-pink-500 rounded-2xl">
              <img src="https://media.discordapp.net/attachments/1273210879126667314/1306173548800249886/jk.png?ex=67afa729&is=67ae55a9&hm=fe2bc95c72e9f29b9858a4d8d3f3ec4b3d764db99a5f567d79ec66d2fc2ea873&=&format=webp&quality=lossless&width=350&height=350" alt="Janindu Karunathilaka" className="w-full rounded-xl relative z-10 hover:transform hover:scale-[1.02] transition-transform duration-300" />
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-purple-500" />
                Janindu Karunathilaka
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. My journey in web development has equipped me
                with a deep understanding of building scalable applications and
                creating exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1 * index
              }} className="bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-purple-500 mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }} whileHover={{
          y: -5
        }} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-lg w-fit mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};