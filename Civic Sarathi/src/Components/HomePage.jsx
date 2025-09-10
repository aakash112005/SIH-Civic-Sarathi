
import { Lightbulb, RefreshCcw, User, Settings, Bot, Award, MessageCircle, Shield, Book, ArrowRight } from "lucide-react";
import { MapPin } from "lucide-react" // icon for button
import Footer from "../Components/Footer"
import map from "../assets/map.png"
import { Link, Links } from "react-router-dom";
import HomeChart from "./HomeChart";
import { useState,useEffect } from "react";
// main.jsx
import "leaflet/dist/leaflet.css";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons (Leaflet bug in Vite/React)

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});



const features = [
  {
    icon: Lightbulb,
    title: "Issue Reporting",
    description: "Submit and manage local issues efficiently.",
    link: "/report",
  },
  {
    icon: RefreshCcw,
    title: "Issue Tracking",
    description: "Monitor the status of your reported issues.",
    link: "/complaint-status",
  },
  {
    icon: User,
    title: "Citizen Services",
    description: "Access various government services and resources.",
    link: "/citizen-dashboard",
  },
  {
    icon: Settings,
    title: "Department Dashboard",
    description: "Tools for city departments to manage tasks.",
    link: "/department-dashboard",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "Get instant answers and support for common queries.",
    link: "/chatbot",
  },
  {
    icon: Award,
    title: "Rewards & Recognition",
    description: "Participate and get rewarded for civic engagement.",
    link: "/rewards",
  },
  {
    icon: MessageCircle,
    title: "Feedback Portal",
    description: "Share your suggestions to improve city services.",
    link: "/feedback",
  },
  {
    icon: Shield,
    title: "Super Admin Panel",
    description: "Comprehensive administration and oversight tools.",
    link: "/superadmin-dashboard",
  },
  {
    icon: Book,
    title: "Resources & Guides",
    description: "Find helpful guides and information about city services.",
    link: "/about",
  },
];


export default function HomePage() {


   const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Generate 30 random markers around Delhi coords
    const baseLat = 28.6139;
    const baseLng = 77.209;
    const randomMarkers = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      lat: baseLat + (Math.random() - 0.5) * 0.1, // random ±0.05
      lng: baseLng + (Math.random() - 0.5) * 0.1,
    }));
    setMarkers(randomMarkers);
  }, []);



  return (
    <>







<section className="bg-white flex min-h-[500px]">
  <div className="container mx-auto px-[70px] flex flex-col lg:flex-row items-start gap-10 py-[100px] lg:items-center">
    {/* Left Content */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        Empowering Citizens, <br /> Enhancing Governance
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        Civic Sarathi connects citizens with local government for efficient
        issue resolution, transparent tracking, and community engagement.
        Report issues, access services, and contribute to a better city.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
        <Link to="/services">
          <span className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition cursor-pointer">
            Explore Services
          </span>
        </Link>
        <Link to="/report">
          <span className="px-6 py-3 rounded-lg bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition cursor-pointer">
            Report a Problem
          </span>
        </Link>
      </div>
    </div>

    {/* Map */}
    <div className="flex-1 min-h-[300px] h-[400px] w-full">
      <MapContainer
        center={[28.6139, 77.209]}
        zoom={12}
        className="w-full h-full rounded-xl shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={[m.lat, m.lng]} />
        ))}
      </MapContainer>
    </div>
  </div>
</section>





    <section className="px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link to={feature.link}>
          <a
            key={index}
           
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
          >
            <div className="flex items-start space-x-3">
              <feature.icon className="w-6 h-6 text-indigo-500" />
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </a>
          </Link>
        ))}
      </div>
    </section>
    <HomeChart />
     <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900">
          Real-time Impact: View Issues on the Map
        </h2>
        <p className="text-gray-600 mt-2">
          See how civic issues are being reported and addressed across your city.
        </p>

        {/* Map Image */}
       <div className="flex-1 h-[400px] mt-8">
      <MapContainer
        center={[28.6139, 77.209]}
        zoom={12}
        className="w-full h-full rounded-xl shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={[m.lat, m.lng]}>
            
          </Marker>
        ))}
      </MapContainer>
    </div>

        {/* Button */}
        <div className="mt-6">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            <MapPin className="w-5 h-5" />
            View All Complaints
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}