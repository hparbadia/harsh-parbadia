
import { Briefcase, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    Student Assistant
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-300 mb-1">
                    <Building className="h-4 w-4 text-blue-400" />
                    <span className="font-medium">Parking Department</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span>Long Beach City College</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    Student Support
                  </span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    Administrative Tasks
                  </span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    Customer Service
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Assisting with parking operations and providing support to students and staff. 
                  Gained valuable experience in customer service, problem-solving, and administrative processes 
                  while maintaining a professional campus environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
