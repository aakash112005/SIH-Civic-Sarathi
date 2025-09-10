import React from "react";
 import { FaClipboardList, FaHourglassHalf, FaCheckCircle, FaRegClock } from "react-icons/fa";
 import { FaBell, FaChartLine } from "react-icons/fa";
import Footer from "./Footer";

function CitizenDashboard() {


    


  // Complaints Data Array
  const complaints = [
    {
      id: "CS20240722-005",
      subject: "Garbage Overflow at City Park",
      status: "Pending",
      date: "2025-07-22",
    },
    {
      id: "CS20240720-004",
      subject: "Broken Streetlight near Library",
      status: "In Progress",
      date: "2025-07-20",
    },
    {
      id: "CS20240715-003",
      subject: "Water Leakage Sector 15",
      status: "Resolved",
      date: "2025-07-15",
    },
    {
      id: "CS20240710-002",
      subject: "Illegal Parking Zone 7",
      status: "Resolved",
      date: "2025-07-10",
    },
    {
      id: "CS20240705-001",
      subject: "Pothole on Main Street",
      status: "In Progress",
      date: "2025-07-05",
    },
  ];

const notifications = [
  {
    message: "Your complaint 'Pothole on Main St' status updated to In Progress.",
    time: "2 hours ago",
    isNew: true,
  },
  {
    message: "New civic update: Road construction in Sector 17.",
    time: "1 day ago",
    isNew: true,
  },
  {
    message: "Complaint #CS20240715-003 resolved successfully.",
    time: "1 day ago",
    isNew: false,
  },
  
];

  // Array of card data
  const complaintsData = [
    {
      title: "Total Complaints",
      number: 12,
      description: "All issues reported.",
      icon: <FaClipboardList size={24} />,
    },
    {
      title: "In Progress",
      number: 3,
      description: "Currently being addressed.",
      icon: <FaHourglassHalf size={24} />,
    },
    {
      title: "Resolved",
      number: 8,
      description: "Successfully closed issues.",
      icon: <FaCheckCircle size={24} />,
    },
    {
      title: "Pending Approval",
      number: 1,
      description: "Awaiting your feedback.",
      icon: <FaRegClock size={24} />,
    },
  ];



const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium";
      case "In Progress":
        return "bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium";
      case "Resolved":
        return "bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium";
      default:
        return "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium";
    }
  };


  return (
    <>
    <div className="p-12">
      <h2 className="text-4xl font-bold mb-10">Citizen Dashboard</h2>
      <h3 className="text-lg font-semibold mb-6">Complaint Overview</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {complaintsData.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-6 flex flex-col items-start justify-center  gap-4
              ${item.title === "In Progress" ? "bg-blue-50" : "bg-white"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              {item.icon}
              <h4 className="text-md font-semibold">{item.title}</h4>
            </div>
            <p className="text-2xl font-bold">{item.number}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>







    <div className="p-12">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notifications Section */}
        <div className="bg-white rounded-2xl shadow-md p-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <FaBell />
          </div>

          <div className="space-y-4">
            {notifications.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FaBell className="text-blue-500 mt-1" />
                <div>
                  <p className="text-sm">{item.message}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {item.time && <span>{item.time}</span>}
                    {item.isNew && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Quick Tips</h3>
            <FaChartLine />
          </div>
          <h4 className="font-bold mb-2">New ways to report issues!</h4>
          <p className="text-sm text-gray-600 mb-4">
            Discover how to submit complaints faster and track their progress
            with ease using our new features.
          </p>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>









    <div className="p-12">
      <h2 className="text-2xl font-bold mb-4">Complaint History</h2>

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Complaint ID</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Subject</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Status</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 font-medium">{item.id}</td>
                <td className="px-6 py-4">{item.subject}</td>
                <td className="px-6 py-4">
                  <span className={getStatusStyle(item.status)}>{item.status}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default CitizenDashboard;
