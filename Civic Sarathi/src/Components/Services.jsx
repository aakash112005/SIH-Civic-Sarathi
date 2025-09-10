import React from "react";
import { Link } from "react-router-dom";
import { Megaphone, Search, BarChart2, Gift, MessageCircle, Star } from "lucide-react";
import Footer from "./Footer";

function Services() {
  const services = [
    {
      title: "Report an Issue",
      description: "Quickly report civic issues like sanitation, roads, or electricity.",
      icon: <Megaphone className="w-8 h-8 text-indigo-600" />,
      link: "/report",
      button: "Report Now",
    },
    {
      title: "Track Complaint",
      description: "Check the progress of your submitted complaints in real-time.",
      icon: <Search className="w-8 h-8 text-indigo-600" />,
      link: "/complaint-status",
      button: "Track Now",
    },
    {
      title: "Complaint Status",
      description: "View detailed resolution steps, updates, and complaint history.",
      icon: <BarChart2 className="w-8 h-8 text-indigo-600" />,
      link: "/complaint-status", // Example dynamic link
      button: "View Status",
    },
    {
      title: "Civic Rewards",
      description: "Unlock benefits like loan concessions, transport passes, and more.",
      icon: <Gift className="w-8 h-8 text-indigo-600" />,
      link: "/rewards",
      button: "Explore Rewards",
    },
    {
      title: "Virtual Assistant",
      description: "Chat with Sarathi, your AI assistant for instant help and guidance.",
      icon: <MessageCircle className="w-8 h-8 text-indigo-600" />,
      link: "/chatbot",
      button: "Chat Now",
    },
    {
      title: "Feedback",
      description: "Share your experience and help us improve civic services.",
      icon: <Star className="w-8 h-8 text-indigo-600" />,
      link: "/feedback",
      button: "Give Feedback",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
        <p className="text-gray-600 mt-2">
          Explore all the features available to make your civic engagement easy and effective.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={service.link}
              className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              {service.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Services;
