
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Harshkumar Parbadia
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Computer Science Student
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and innovation. Currently pursuing my Associate Degree in Computer Science 
            with a focus on building impactful applications.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:bg-purple-600 hover:text-white transition-all duration-300"
            onClick={() => window.open("https://github.com/hparbadia", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:bg-blue-600 hover:text-white transition-all duration-300"
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
          className="group animate-float"
        >
          <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
          <span className="sr-only">Scroll to content</span>
        </Button>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};
