import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { useParams } from "react-router-dom";

// Dummy data for district details
const complaintTrends = [
  { month: "Jan", resolved: 200, pending: 80 },
  { month: "Feb", resolved: 280, pending: 70 },
  { month: "Mar", resolved: 260, pending: 90 },
  { month: "Apr", resolved: 300, pending: 60 },
  { month: "May", resolved: 320, pending: 55 },
  { month: "Jun", resolved: 310, pending: 50 },
  { month: "Jul", resolved: 330, pending: 45 },
  { month: "Aug", resolved: 380, pending: 40 },
];

const complaintStatus = [
  { name: "Resolved", value: 75 },
  { name: "Pending", value: 20 },
  { name: "In Progress", value: 15 },
  { name: "Escalated", value: 10 },
];

const COLORS = ["#82ca9d", "#8884d8", "#ffc658", "#ff7f7f"];

const staffPerformance = [
  { name: "Aakash", complaints: 85 },
  { name: "Kushagra", complaints: 90 },
  { name: "Lucky", complaints: 80 },
  { name: "Rishabh", complaints: 110 },
  { name: "Kalyani", complaints: 60 },
];

const staffList = [
  { name: "Alok Singh", role: "Complaint Officer", district: "East Delhi", complaints: 120, status: "Active" },
  { name: "Sarita Devi", role: "Resolution Manager", district: "North Delhi", complaints: 95, status: "Active" },
  { name: "Gopal Krishan", role: "Field Inspector", district: "South Delhi", complaints: 80, status: "On Leave" },
  { name: "Meena Kumari", role: "Support Staff", district: "West Delhi", complaints: 70, status: "Active" },
  { name: "Vikram Sharma", role: "Data Analyst", district: "Central Delhi", complaints: 50, status: "Inactive" },
];

export default function DistrictDetail() {
  const { districtName } = useParams();
  const Name  = districtName.toUpperCase()

  return (
    <div className="p-10 space-y-12 px-12">
      <h1 className="text-4xl font-bold mb-8">District Dashboard - District  "{Name}"</h1>

      {/* District Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-500">Total Districts</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-500">Active Complaints</h3>
          <p className="text-2xl font-bold">230</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-500">Avg. Resolution Time</h3>
          <p className="text-2xl font-bold">3.2 Days</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-500">Resolved Last Month</h3>
          <p className="text-2xl font-bold">180</p>
        </div>
      </div>

      {/* Complaint Trends & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-2">Complaint Resolution Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={complaintTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="resolved" stroke="#000000" name="Resolved" />
              <Line type="monotone" dataKey="pending" stroke="#3b82f6" name="Pending" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-2">Complaint Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={complaintStatus}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {complaintStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Staff Performance */}
      <div className="bg-white rounded-xl shadow-md px-[200px]">
        <h3 className="font-semibold mb-4">Staff Efficiency</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={staffPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="complaints" fill="#3b82f6" name="Complaints Handled" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Manage Staff */}
      <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
        <h3 className="font-semibold mb-4">Manage Staff</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Name</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Role</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">District</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Complaints Handled</th>
              <th className="px-6 py-3 font-semibold text-sm text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{staff.name}</td>
                <td className="px-6 py-4">{staff.role}</td>
                <td className="px-6 py-4">{staff.district}</td>
                <td className="px-6 py-4">{staff.complaints}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      staff.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : staff.status === "On Leave"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {staff.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
