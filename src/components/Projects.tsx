
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Safe Haven",
      description: "Preprocessed 10,000+ records from California homelessness and health datasets, achieving 98% data integrity for predictive modeling. Created 15+ visualizations to uncover patterns in healthcare and homelessness data, enabling insights that drove 92% model accuracy.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "XGBoost", "Pandas", "NumPy", "Excel"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Codemeet.dev",
      description: "Engineered AI feedback loops with Google Gemini LLMs, boosting accuracy by 20% and powering 50+ real-time mock interviews. Built NLP pipelines using LLMs to interpret candidate inputs and generate context-aware follow-ups, improving response relevance by 25% across 50+ interviews.",
      technologies: ["Express.js", "React.js", "Gemini", "Postman", "PostgreSQL", "REST APIs"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Elevatemeapp.co",
      description: "Designed an intuitive interface in Figma, improving platform usability by 30% and enhancing overall user experience. Created responsive login and multi-step sign-up pages using React and Tailwind CSS, boosting user acquisition by 20%. Led Agile team coordination to deliver features on time, ensuring seamless collaboration and project completion within 24 hours.",
      technologies: ["Firebase", "Figma", "MongoDB", "React.js", "Tailwind CSS", "Flask", "Python", "Project Management"],
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-center">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800/50 text-blue-300 rounded-full text-xs font-medium border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                      {tech}
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
