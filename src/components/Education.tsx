
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
                Long Beach City College
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">August 2023 - May 2025</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  Associate Degree in Computer Science
                </h3>
                
                <div className="flex items-center justify-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-lg font-medium text-gray-700">
                    GPA: <span className="text-purple-600 font-bold">3.5</span>
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                  <span className="text-sm font-medium text-gray-700">
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
