
import { Smartphone, Brain, TrendingUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:scale-105">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Habit Quest App
                  </CardTitle>
                  <p className="text-gray-300 text-lg mt-1">
                    AI-Powered Android Application
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                An innovative Android application that leverages artificial intelligence to help users 
                build and maintain healthy habits. The app features intelligent tracking and provides 
                personalized insights to improve user wellness.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">AI-Powered</h4>
                    <p className="text-sm text-gray-300">Smart recommendations and insights</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30 hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-white">Health Accuracy</h4>
                    <p className="text-sm text-gray-300">20% improvement in health stats</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                  Android Development
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  Health & Wellness
                </span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  Mobile App
                </span>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <Button 
                  variant="outline" 
                  className="group bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://github.com/hparbadia", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
