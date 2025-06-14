
import { Database, Brain, TrendingUp, ExternalLink, Users, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Safe Haven",
      description: "Data Analysis & Predictive Modeling for Homelessness",
      icon: Database,
      details: "Preprocessed 10,000+ records from California homelessness and health datasets, achieving 98% data integrity for predictive modeling. Created 15+ visualizations to uncover patterns in healthcare and homelessness data, enabling insights that drove 92% model accuracy.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "XGBoost", "Pandas", "NumPy", "Excel"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "purple-500/30",
      iconColor: "purple-400"
    },
    {
      title: "Codemeet.dev",
      description: "AI-Powered Mock Interview Platform",
      icon: Brain,
      details: "Engineered AI feedback loops with Google Gemini LLMs, boosting accuracy by 20% and powering 50+ real-time mock interviews. Built NLP pipelines using LLMs to interpret candidate inputs and generate context-aware follow-ups, improving response relevance by 25% across 50+ interviews.",
      technologies: ["Express.js", "React.js", "Google Gemini", "Postman", "PostgreSQL", "REST APIs"],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      borderColor: "blue-500/30",
      iconColor: "blue-400",
      link: "https://codemeet.dev"
    },
    {
      title: "Elevatemeapp.co",
      description: "User Experience & Frontend Development",
      icon: Globe,
      details: "Designed an intuitive interface in Figma, improving platform usability by 30% and enhancing overall user experience. Created responsive login and multi-step sign-up pages using React and Tailwind CSS, boosting user acquisition by 20%. Led Agile team coordination to deliver features on time.",
      technologies: ["Firebase", "Figma", "MongoDB", "React.js", "Tailwind CSS", "Flask", "Python", "Project Management"],
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-600/20 to-teal-600/20",
      borderColor: "green-500/30",
      iconColor: "green-400",
      link: "https://elevatemeapp.co"
    },
    {
      title: "Habit Quest App",
      description: "AI-Powered Android Application",
      icon: Smartphone,
      details: "An innovative Android application that leverages artificial intelligence to help users build and maintain healthy habits. The app features intelligent tracking and provides personalized insights to improve user wellness.",
      technologies: ["Android Development", "Artificial Intelligence", "Health & Wellness", "Mobile App"],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-600/20 to-red-600/20",
      borderColor: "orange-500/30",
      iconColor: "orange-400"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 bg-gradient-to-r ${project.bgGradient} text-${project.iconColor.split('-')[0]}-300 rounded-full text-xs font-medium border border-${project.borderColor}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-4 border-t border-gray-800">
                    <Button 
                      variant="outline" 
                      className="group bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Visit Website
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
