import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "../data/mockData";

const ContactUs = () => {
  const { toast } = useToast ? useToast() : { toast: () => {} };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to start your child's behavioral therapy journey? Get in touch with our compassionate team today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Phone */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a
                      href={`tel:${contactInfo.phones[0]}`}
                      className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {contactInfo.phones[0]}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-medium text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-slate-600 mt-1">We typically respond within 4-6 hours during business days</p>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Locations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.addresses.map((address, index) => (
                      <div key={index} className="border-b border-slate-100 pb-4 last:border-b-0">
                        <h4 className="font-semibold text-slate-800 mb-1">{address.name}</h4>
                        <p className="text-slate-600">
                          {address.street}
                          <br />
                          {address.city}
                          <br />
                          {address.state}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span>Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {Object.entries(contactInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize font-medium text-slate-700">{day}:</span>
                        <span className="text-slate-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Send Us a Message</CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible. All consultations are completely confidential.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required className="h-12" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your child's needs or any questions you have..." required className="min-h-32" />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-slate-500 text-center">* Required fields. Your information is kept strictly confidential.</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Visit Our Centers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We have two convenient locations to serve families in the area. Both centers offer the same high-quality behavioral therapy services.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.addresses.map((address, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                    <p className="text-slate-600">Interactive map coming soon</p>
                    <Button variant="outline" className="mt-4">Get Directions</Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{address.name}</h3>
                  <p className="text-slate-600">
                    {address.street}
                    <br />
                    {address.city}
                    <br />
                    {address.state}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     



  </div>
  );
};

export default ContactUs;
