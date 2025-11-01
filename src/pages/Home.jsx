import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Play, Users, Award, Clock, Heart, Brain, Target, CheckCircle } from "lucide-react";

const Home = () => {
  const [counters, setCounters] = useState({
    students: 0,
    therapists: 0,
    experience: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Animation for counters
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { students: 50, therapists: 10, experience: 5 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          students: Math.floor(targets.students * progress),
          therapists: Math.floor(targets.therapists * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (currentStep >= steps) {
          setCounters(targets);
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
              Welcome to Harmony Behavioral Therapy Center
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Best Behavioral Therapy Center in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Your City
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              "Where every behavior challenge becomes an opportunity for growth, 
              where every child's progress is celebrated!"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/contact">KNOW MORE</Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <Play className="h-4 w-4 text-white ml-1" />
                </div>
                WATCH VIDEO
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://media.istockphoto.com/id/858352780/photo/cheerful-boy-with-disability-at-rehabilitation-center-for-kids-with-special-needs.jpg?s=612x612&w=0&k=20&c=NOnLZJM5s3n5JDPy7jrU-cwzQMZx6AOmVPQ0mAzd6oI="
                alt="Parents and therapist discussing child's progress"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg transform rotate-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Happy Children</p>
                  <p className="text-xs text-slate-600">Growing Every Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Can Change Your Child's Life Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="assets\images\images2.jpeg"
                  alt="Therapist working with child"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
                We Can Change Your Child's{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Life
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Harmony Behavioral Therapy Center provides therapy plans tailored to your 
                child's unique needs, fostering both emotional and behavioral growth. 
                Through specialized support and a nurturing environment, your 
                child will gain confidence, <em>paving the way for a brighter future</em>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: "Behavioral Skills Training", desc: "Daily routines & self-regulation" },
                  { icon: Target, title: "Functional Assessment", desc: "Comprehensive behavior analysis" },
                  { icon: Heart, title: "Emotional Support", desc: "Building emotional intelligence" },
                  { icon: Users, title: "Family Involvement", desc: "Supporting the whole family" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            {[
              { number: counters.students, suffix: "+", label: "Students Enrolled", icon: Users },
              { number: counters.therapists, suffix: "+", label: "Expert Therapists", icon: Award },
              { number: counters.experience, suffix: "+", label: "Years Experience", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-5xl font-bold mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <p className="text-xl text-blue-100">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of families who have seen amazing transformations. 
            Every child deserves the chance to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
