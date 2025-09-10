// import React from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import Footer from "./Footer";

// // Dummy Data
// const complaintData = [
//   { district: "District A", total: 1000, resolved: 800 },
//   { district: "District B", total: 1200, resolved: 950 },
//   { district: "District C", total: 1400, resolved: 1200 },
//   { district: "District D", total: 1100, resolved: 900 },
//   { district: "District E", total: 900, resolved: 750 },
// ];

// const resolutionData = [
//   { district: "District A", avgTime: 3 },
//   { district: "District B", avgTime: 4.5 },
//   { district: "District C", avgTime: 3.2 },
//   { district: "District D", avgTime: 4 },
//   { district: "District E", avgTime: 2.8 },
// ];

// const complianceReports = [
//   { id: "CR001", district: "District A", category: "Road Repair", sla: "98%", status: "Compliant", violations: 0 },
//   { id: "CR002", district: "District B", category: "Waste Management", sla: "85%", status: "Needs Review", violations: 3 },
//   { id: "CR003", district: "District C", category: "Public Health", sla: "99%", status: "Compliant", violations: 0 },
//   { id: "CR004", district: "District D", category: "Water Supply", sla: "70%", status: "Non Compliant", violations: 5 },
//   { id: "CR005", district: "District E", category: "Street Lighting", sla: "92%", status: "Compliant", violations: 1 },
//   { id: "CR006", district: "District A", category: "Public Safety", sla: "95%", status: "Compliant", violations: 0 },
// ];

// const getStatusStyle = (status) => {
//   switch (status) {
//     case "Compliant":
//       return "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700";
//     case "Needs Review":
//       return "px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700";
//     case "Non Compliant":
//       return "px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700";
//     default:
//       return "px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700";
//   }
// };

// export default function SuperAdmin() {
//   return (
//     <>
// <h1 className="text-4xl font-bold text m-8">Super Admin DashBoard</h1>
//     <div className="p-12 space-y-16">
        
//       {/* Performance Overview */}
//       <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="text-sm text-gray-500">Total Complaints</h3>
//           <p className="text-2xl font-bold">6.2K</p>
//           <span className="text-xs text-gray-500">Increased by 15% from last month</span>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="text-sm text-gray-500">Resolved Complaints</h3>
//           <p className="text-2xl font-bold">5.8K</p>
//           <span className="text-xs text-gray-500">93% resolution rate</span>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="text-sm text-gray-500">Avg. Resolution Time</h3>
//           <p className="text-2xl font-bold">2.9 Days</p>
//           <span className="text-xs text-gray-500">Improved by 10% from last month</span>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="text-sm text-gray-500">SLA Compliance Rate</h3>
//           <p className="text-2xl font-bold">95%</p>
//           <span className="text-xs text-gray-500">Consistently above 90%</span>
//         </div>
//       </div>

//       {/* District Comparisons */}
//       <h2 className="text-2xl font-bold">District Comparisons</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Bar Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="font-medium mb-2">Complaint Distribution by District</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={complaintData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="district" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="total" fill="#8884d8" name="Total Complaints" />
//               <Bar dataKey="resolved" fill="#82ca9d" name="Resolved" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="font-medium mb-2">Average Resolution Time by District</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={resolutionData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="district" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="avgTime" stroke="#8884d8" name="Avg Time (Days)" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Compliance Reports */}
//       <h2 className="text-2xl font-bold">Compliance Reports</h2>
//       <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">Report ID</th>
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">District</th>
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">Category</th>
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">SLA Adherence</th>
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">Status</th>
//               <th className="px-6 py-3 font-semibold text-sm text-gray-700">Pending Violations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {complianceReports.map((item, index) => (
//               <tr key={index} className="border-t">
//                 <td className="px-6 py-4">{item.id}</td>
//                 <td className="px-6 py-4">{item.district}</td>
//                 <td className="px-6 py-4">{item.category}</td>
//                 <td className="px-6 py-4">{item.sla}</td>
//                 <td className="px-6 py-4">
//                   <span className={getStatusStyle(item.status)}>{item.status}</span>
//                 </td>
//                 <td className="px-6 py-4">{item.violations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* AI Insights */}
//       <h2 className="text-2xl font-bold">AI-Driven Insights</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="font-semibold">Predicted Hotspots</h3>
//           <p className="text-sm text-gray-600">
//             Anticipated increase in road repair complaints in District B next quarter. Allocate resources proactively.
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="font-semibold">Efficiency Bottlenecks</h3>
//           <p className="text-sm text-gray-600">
//             Identified recurring delays in waste management resolution due to manual approval processes. Suggest automating.
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h3 className="font-semibold">Future Trend Analysis</h3>
//           <p className="text-sm text-gray-600">
//             Projected 20% rise in public health related complaints due to seasonal changes. Prepare rapid response teams.
//           </p>
//         </div>
//       </div>
     
//     </div>
//      <Footer />
//      </>
//   );
// }





import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// Dummy Data
const complaintData = [
  { district: "District A", total: 1000, resolved: 800 },
  { district: "District B", total: 1200, resolved: 950 },
  { district: "District C", total: 1400, resolved: 1200 },
  { district: "District D", total: 1100, resolved: 900 },
  { district: "District E", total: 900, resolved: 750 },
];

const resolutionData = [
  { district: "District A", avgTime: 3 },
  { district: "District B", avgTime: 4.5 },
  { district: "District C", avgTime: 3.2 },
  { district: "District D", avgTime: 4 },
  { district: "District E", avgTime: 2.8 },
];

const complianceReports = [
  { id: "CR001", district: "District A", category: "Road Repair", sla: "98%", status: "Compliant", violations: 0 },
  { id: "CR002", district: "District B", category: "Waste Management", sla: "85%", status: "Needs Review", violations: 3 },
  { id: "CR003", district: "District C", category: "Public Health", sla: "99%", status: "Compliant", violations: 0 },
  { id: "CR004", district: "District D", category: "Water Supply", sla: "70%", status: "Non Compliant", violations: 5 },
  { id: "CR005", district: "District E", category: "Street Lighting", sla: "92%", status: "Compliant", violations: 1 },
  { id: "CR006", district: "District A", category: "Public Safety", sla: "95%", status: "Compliant", violations: 0 },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Compliant":
      return "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700";
    case "Needs Review":
      return "px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700";
    case "Non Compliant":
      return "px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700";
    default:
      return "px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700";
  }
};

export default function SuperAdmin() {
  const navigate = useNavigate();

  // Handle chart click
  const handleChartClick = (data) => {
    if (data && data.activeLabel) {
       const districtLetter = data.activeLabel.replace("District ", "");
    navigate(`/district/${districtLetter}`);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text m-8">Super Admin DashBoard</h1>
      <div className="p-12 space-y-16">
        {/* Performance Overview */}
        <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Total Complaints</h3>
            <p className="text-2xl font-bold">6.2K</p>
            <span className="text-xs text-gray-500">Increased by 15% from last month</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Resolved Complaints</h3>
            <p className="text-2xl font-bold">5.8K</p>
            <span className="text-xs text-gray-500">93% resolution rate</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Avg. Resolution Time</h3>
            <p className="text-2xl font-bold">2.9 Days</p>
            <span className="text-xs text-gray-500">Improved by 10% from last month</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">SLA Compliance Rate</h3>
            <p className="text-2xl font-bold">95%</p>
            <span className="text-xs text-gray-500">Consistently above 90%</span>
          </div>
        </div>

        {/* District Comparisons */}
        <h2 className="text-2xl font-bold">District Comparisons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-medium mb-2">Complaint Distribution by District</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complaintData} onClick={handleChartClick}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="district" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" name="Total Complaints" />
                <Bar dataKey="resolved" fill="#82ca9d" name="Resolved" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-medium mb-2">Average Resolution Time by District</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={resolutionData} onClick={handleChartClick}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="district" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avgTime" stroke="#8884d8" name="Avg Time (Days)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Compliance Reports */}
        <h2 className="text-2xl font-bold">Compliance Reports</h2>
        <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">Report ID</th>
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">District</th>
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">Category</th>
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">SLA Adherence</th>
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">Status</th>
                <th className="px-6 py-3 font-semibold text-sm text-gray-700">Pending Violations</th>
              </tr>
            </thead>
            <tbody>
              {complianceReports.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.district}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.sla}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusStyle(item.status)}>{item.status}</span>
                  </td>
                  <td className="px-6 py-4">{item.violations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Insights */}
        <h2 className="text-2xl font-bold">AI-Driven Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold">Predicted Hotspots</h3>
            <p className="text-sm text-gray-600">
              Anticipated increase in road repair complaints in District B next quarter. Allocate resources proactively.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold">Efficiency Bottlenecks</h3>
            <p className="text-sm text-gray-600">
              Identified recurring delays in waste management resolution due to manual approval processes. Suggest automating.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold">Future Trend Analysis</h3>
            <p className="text-sm text-gray-600">
              Projected 20% rise in public health related complaints due to seasonal changes. Prepare rapid response teams.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
