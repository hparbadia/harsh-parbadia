
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Get In Touch
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Whether you want to discuss potential opportunities, 
                      collaborate on a project, or just say hello, I'd love to hear from you.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Always open to new conversations</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 text-center md:text-left">
                    Connect With Me
                  </h4>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full group hover:bg-gray-900 hover:text-white transition-all duration-300"
                      onClick={() => window.open("https://github.com/hparbadia", "_blank")}
                    >
                      <Github className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                      <span className="flex-1 text-left">GitHub Profile</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full group hover:bg-blue-600 hover:text-white transition-all duration-300"
                      onClick={() => window.open("https://www.linkedin.com/in/harshkumar-parbadia-255b7b369/", "_blank")}
                    >
                      <Linkedin className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                      <span className="flex-1 text-left">LinkedIn Profile</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
