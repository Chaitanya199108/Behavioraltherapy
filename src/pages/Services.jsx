import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, Baby, Globe, Heart, Users, ClipboardCheck, School } from "lucide-react";
import { services } from "../data/mockData";

const Services = () => {
  const iconMap = {
    Baby,
    Globe,
    Heart,
    Users,
    ClipboardCheck,
    School,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              Our Behavioral Therapy Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive, evidence-based programs designed to support children with behavioral challenges 
              and empower families on their journey toward growth and independence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Specialized Programs for Every Need
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our multidisciplinary approach ensures that each child receives the right combination 
              of therapies and support for their unique behavioral profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Globe;
              
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-green-600 transition-colors duration-300"
                    >
                      <Link to={service.path} className="flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">
                Why Choose Our Behavioral Therapy Services?
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Evidence-Based Approaches",
                    description: "All our therapies are grounded in scientific research and proven methodologies."
                  },
                  {
                    title: "Individualized Treatment Plans",
                    description: "Every child receives a customized program based on their unique needs and goals."
                  },
                  {
                    title: "Family-Centered Care",
                    description: "We involve families in every step, providing training and support for lasting success."
                  },
                  {
                    title: "Qualified Professionals",
                    description: "Our team includes board-certified therapists with specialized training in behavioral interventions."
                  },
                  {
                    title: "Comprehensive Support",
                    description: "From assessment to ongoing therapy, we provide complete care coordination."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559291001-693fb9166cdf?w=600&h=500&fit=crop"
                alt="Therapist working with children"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <p className="text-sm text-slate-600">Family Satisfaction</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-blue-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <p className="text-sm">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Therapy Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach that ensures every child receives the most effective 
              behavioral interventions for their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of your child's behavioral, developmental, and social needs."
              },
              {
                step: "02", 
                title: "Treatment Planning",
                description: "Development of individualized goals and evidence-based intervention strategies."
              },
              {
                step: "03",
                title: "Therapy Implementation",
                description: "Regular therapy sessions with continuous progress monitoring and adjustments."
              },
              {
                step: "04",
                title: "Family Support",
                description: "Ongoing training and support to help families maintain progress at home."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-green-300 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free consultation to learn how our behavioral therapy services 
            can support your child's growth and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-3 rounded-full">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-full">
              <Link to="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
