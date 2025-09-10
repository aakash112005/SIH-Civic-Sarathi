import React from "react";
import { BookOpen, FileText, HelpCircle, Download,ShieldCheck ,Users,Bell} from "lucide-react";
import Footer from "./Footer";

function Resources() {
  const resources = [
  {
    title: "Getting Started Guide",
    description:
      "Learn how to use the Civic Sarathi platform to report issues and track progress effectively.",
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "Read Guide",
  },
  {
    title: "Civic Policies",
    description:
      "Understand the policies and frameworks governing public issue resolution in your area.",
    icon: <FileText className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "View Policies",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Find answers to the most common questions about complaints, rewards, and the platform.",
    icon: <HelpCircle className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "View FAQs",
  },
  
  {
    title: "User Safety Guidelines",
    description:
      "Best practices to keep your personal data secure while using Civic Sarathi.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "View Guidelines",
  },
  {
    title: "Community Engagement Tips",
    description:
      "Discover ways to actively participate in local governance and civic initiatives.",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "Learn More",
  },
  {
    title: "System Updates & News",
    description:
      "Stay informed about new features, improvements, and important announcements.",
    icon: <Bell className="w-8 h-8 text-indigo-600" />,
    link: "#",
    button: "Read Updates",
  },
];


  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Resources & Guides</h1>
        <p className="text-gray-600 mt-2">
          Explore helpful resources, guides, and FAQs to make the most of Civic Sarathi.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
          >
            <div className="mb-4">{resource.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              {resource.button}
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Resources;
