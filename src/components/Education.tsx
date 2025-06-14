
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Long Beach City College
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-lg">August 2023 - May 2025</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-200">
                  Associate Degree in Computer Science
                </h3>
                
                <div className="flex items-center justify-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-lg font-medium text-gray-200">
                    GPA: <span className="text-blue-400 font-bold">3.5</span>
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                  <span className="text-sm font-medium text-blue-300">
                    Currently Enrolled
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
