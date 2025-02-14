import React from "react";
export const Skills = () => {
  const skills = [{
    name: "React",
    level: 90
  }, {
    name: "TypeScript",
    level: 85
  }, {
    name: "Node.js",
    level: 80
  }, {
    name: "UI/UX Design",
    level: 75
  }, {
    name: "GraphQL",
    level: 70
  }, {
    name: "AWS",
    level: 65
  }];
  return <section id="skills" className="min-h-screen w-full bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Technical <span className="text-purple-500">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-purple-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000" style={{
              width: `${skill.level}%`
            }}></div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};