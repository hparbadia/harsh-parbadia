
import { Smartphone, Brain, TrendingUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
                    Habit Quest App
                  </CardTitle>
                  <p className="text-gray-600 text-lg mt-1">
                    AI-Powered Android Application
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                An innovative Android application that leverages artificial intelligence to help users 
                build and maintain healthy habits. The app features intelligent tracking and provides 
                personalized insights to improve user wellness.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">AI-Powered</h4>
                    <p className="text-sm text-gray-600">Smart recommendations and insights</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Health Accuracy</h4>
                    <p className="text-sm text-gray-600">20% improvement in health stats</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Android Development
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Health & Wellness
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Mobile App
                </span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="group hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
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
