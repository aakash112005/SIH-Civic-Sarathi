
import { FaListAlt, FaCheckCircle, FaExclamationCircle, FaClock } from "react-icons/fa";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FiFilter } from "react-icons/fi";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Footer from "./Footer";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function DepartmentDashboard() {


      const complaints2 = [
    {
      id: "CS20240722-005",
      category: "Road Repair",
      location: "Sector 14, Block A",
      status: "Resolved",
      date: "2025-07-28",
    },
    {
      id: "CS20240720-004",
      category: "Water Supply",
      location: "Gandhi Nagar, Street 5",
      status: "In Progress",
      date: "2025-07-29",
    },
    {
      id: "CS20240715-003",
      category: "Sanitation",
      location: "Market Area, Shop 12",
      status: "Pending",
      date: "2025-07-29",
    },
    {
      id: "CS20240710-002",
      category: "Electricity",
      location: "Residential Colony, P-3",
      status: "Resolved",
      date: "2025-07-30",
    },
    {
      id: "CS20240705-001",
      category: "Public Park",
      location: "Central Park, Gate 2",
      status: "High Priority",
      date: "2025-07-31",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700";
      case "In Progress":
        return "px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700";
      case "Pending":
        return "px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700";
      case "High Priority":
        return "px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700";
      default:
        return "px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700";
    }
  };

const categories = [
    "Road Repair",
    "Water Supply",
    "Sanitation",
    "Electricity",
    "Public Park",
    "Waste Management",
  ];
  const locations = [
    "Sector 14",
    "Gandhi Nagar",
    "Market Area",
    "Residential Colony",
    "Central Park",
    "Industrial Zone",
  ];
  const priorities = ["High", "Medium", "Low"];

  // Dummy complaint markers
  const complaints = [
    { id: 1, position: [28.7041, 77.1025], title: "Road Repair - Sector 14" },
    { id: 2, position: [28.7055, 77.1089], title: "Water Supply - Gandhi Nagar" },
    { id: 3, position: [28.7101, 77.0978], title: "Sanitation - Market Area" },
    { id: 4, position: [28.7075, 77.115], title: "Electricity - Central Park" },
    { id: 5, position: [28.6985, 77.1201], title: "Waste Management - Industrial Zone" },
  ];



    const overviewData = [
    {
      title: "Total Complaints",
      value: "1,245",
      description: "",
      icon: <FaListAlt size={22} className="text-gray-600" />,
    },
    {
      title: "Resolved Complaints",
      value: "980",
      description: "",
      icon: <FaCheckCircle size={22} className="text-green-600" />,
    },
    {
      title: "Pending Complaints",
      value: "185",
      description: "",
      icon: <FaExclamationCircle size={22} className="text-orange-600" />,
    },
    {
      title: "Avg. Resolution Time",
      value: "2.5 Days",
      description: "",
      icon: <FaClock size={22} className="text-blue-600" />,
    },
  ];
    return (
       <>
       <h2 className="text-4xl font-bold m-6">Municipal Dashboard </h2>
     <div className="p-12">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {overviewData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between gap-6">
              <h4 className="text-sm font-medium text-gray-600">{item.title}</h4>
              {item.icon}
            </div>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>







    <div className="grid grid-cols-12 gap-4 p-12">
      {/* Filters */}
      <div className="col-span-3 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <FiFilter /> Filters
        </h2>

        {/* Category */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Category</h3>
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2 mb-1 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              {c}
            </label>
          ))}
        </div>

        {/* Location */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Location</h3>
          {locations.map((l) => (
            <label key={l} className="flex items-center gap-2 mb-1 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              {l}
            </label>
          ))}
        </div>

        {/* Priority */}
        <div>
          <h3 className="font-medium mb-2">Priority</h3>
          {priorities.map((p) => (
            <label key={p} className="flex items-center gap-2 mb-1 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              {p}
            </label>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="col-span-9 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">📍 Live Complaint Map</h2>
        <MapContainer
          center={[28.7041, 77.1025]}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {complaints.map((comp) => (
            <Marker key={comp.id} position={comp.position}>
              <Popup>{comp.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>







    <div className="p-12">
      <h2 className="text-2xl font-bold mb-4">Recent Complaints</h2>

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Complaint ID
              </th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Category
              </th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Location
              </th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Date Reported
              </th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {complaints2.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 font-medium">{item.id}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">
                  <span className={getStatusStyle(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
                <td className="px-6 py-4">
                  <button className="px-4 py-2 text-sm rounded-lg border bg-gray-50 hover:bg-gray-100">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
   <Footer />
       </>
    )
}

export default DepartmentDashboard
