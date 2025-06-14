
import { Code, Database, Globe, Palette, Brain, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      gradient: "from-blue-600 to-purple-600",
      iconColor: "blue-400"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React.js", "Express.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"],
      gradient: "from-green-600 to-teal-600",
      iconColor: "green-400"
    },
    {
      title: "Data Science & AI",
      icon: Brain,
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "XGBoost", "Google Gemini"],
      gradient: "from-purple-600 to-pink-600",
      iconColor: "purple-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Firebase", "NoSQL"],
      gradient: "from-orange-600 to-red-600",
      iconColor: "orange-400"
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Figma", "Postman", "Git", "Excel", "Project Management"],
      gradient: "from-cyan-600 to-blue-600",
      iconColor: "cyan-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: ["Flask", "REST APIs", "Android Development", "Plotly", "NLP"],
      gradient: "from-indigo-600 to-purple-600",
      iconColor: "indigo-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 bg-gray-800/50 text-${category.iconColor.split('-')[0]}-300 rounded-full text-sm font-medium border border-gray-700 hover:border-${category.iconColor.split('-')[0]}-500 transition-colors duration-300`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
