
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-gray-900">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/6bcf2f64-0df6-4a23-813f-51c0bba75387.png" 
                alt="Harshkumar Parbadia" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-2 border-gray-700 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-400 to-gray-300 bg-clip-text text-transparent mb-6 hover:animate-pulse transition-all duration-300">
            Harshkumar Parbadia
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-in-left">
            Computer Science Student
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and innovation. Currently pursuing my Associate Degree in Computer Science 
            with a focus on building impactful applications.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://github.com/hparbadia", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://www.linkedin.com/in/harshkumar-parbadia-255b7b369/", "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            LinkedIn
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="lg"
          onClick={() => scrollToSection("education")}
          className="group animate-float text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform animate-bounce" />
          <span className="sr-only">Scroll to content</span>
        </Button>
      </div>
    </section>
  );
};
