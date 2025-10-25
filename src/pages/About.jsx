import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Users, Award, Clock, Heart, Target, CheckCircle, Star } from "lucide-react";
import { therapists, testimonials, statistics } from "../data/mockData";

const AboutUs = () => {
  const [counters, setCounters] = useState({
    students: 0,
    therapists: 0,
    experience: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { 
        students: statistics.studentsEnrolled, 
        therapists: statistics.expertTherapists, 
        experience: statistics.yearsExperience 
      };
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              About Harmony Behavioral Therapy Center
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Where every behavior challenge becomes an opportunity for growth, 
              where every child's journey is celebrated with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* We Can Change Your Child's Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">
                We Can Change Your Child's Life
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                At Harmony Behavioral Therapy Center, we provide specialized services for 
                children who may not fit into regular educational or therapeutic settings. 
                Our comprehensive approach focuses on developing independence, communication skills, 
                and preparing each child for future success in school and life.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Through evidence-based behavioral interventions, individualized treatment plans, 
                and family-centered care, we help children overcome behavioral challenges and 
                reach their full potential. Our goal is to empower every child with the skills 
                they need to thrive in their community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Target, title: "Independence Building", desc: "Self-care & life skills" },
                  { icon: Heart, title: "Emotional Growth", desc: "Regulation & coping strategies" },
                  { icon: Users, title: "Social Skills", desc: "Peer interaction & communication" },
                  { icon: CheckCircle, title: "Academic Readiness", desc: "School preparation & support" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <item.icon className="h-5 w-5 text-green-600" />
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

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop"
                alt="Children in therapy activities"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Caring Support</p>
                    <p className="text-sm text-slate-600">Every Step of the Way</p>
                  </div>
                </div>
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

      {/* Our Expert Therapists */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Expert Therapists
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet our dedicated team of professionals committed to transforming lives 
              through evidence-based behavioral therapy and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.id} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{therapist.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{therapist.role}</p>
                  <p className="text-sm text-slate-600 mb-4">{therapist.experience} experience</p>
                  
                  <div className="mb-4">
                    {therapist.certifications.map((cert, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-1 mb-1">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 mb-4">{therapist.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {therapist.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What Parents Say About Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from families whose children have thrived with our behavioral therapy programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.parent}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.parent}</p>
                      <p className="text-sm text-slate-600">Parent of {testimonial.child}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of families who have experienced positive transformations through our comprehensive behavioral therapy programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-3 rounded-full">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-full">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
