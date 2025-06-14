
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, FileText } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Aspiring Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/27ab3987-5b54-4ba9-8461-38b5e3ef4653.png" 
            alt="Harshkumar Parbadia" 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-6 shadow-2xl border-4 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Harshkumar Parbadia
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in delay-200">
          {text}
          <span className="blinking-cursor">|</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/harshkumarparbadia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
            asChild
          >
            <a href="https://github.com/hparbadia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-green-400 hover:text-green-400 transition-colors duration-300"
            asChild
          >
            <a href="https://drive.google.com/file/d/15V8uSZQCF6sexlFdNm0H4CvEXPLOGWXn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
