import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid
} from "recharts"


function HomeChart() {
     // Sample chart data
  const barData = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 70 },
    { name: "May", value: 80 },
    { name: "Jun", value: 90 },
  ]

  const pieData = [
    { name: "Completed", value: 40, color: "#4f46e5" },
    { name: "Pending", value: 30, color: "#f43f5e" },
    { name: "In Progress", value: 20, color: "#10b981" },
    { name: "Other", value: 10, color: "#3b82f6" },
  ]

  const lineData = [
    { name: "Jan", value: 50 },
    { name: "Feb", value: 60 },
    { name: "Mar", value: 65 },
    { name: "Apr", value: 70 },
    { name: "May", value: 72 },
    { name: "Jun", value: 78 },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-2">Platform Overview</h2>
        <p className="text-gray-600 text-center mb-10">
          A snapshot of Civic Sarathi’s impact and current operational status across key areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 - Active Users */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 font-medium">Active Users</h3>
            <p className="text-3xl font-bold mt-2">5,234</p>
            <p className="text-sm text-green-600 mt-1">+19% from last month</p>
          </div>

          {/* Card 2 - Issues Resolved */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 font-medium">Issues Resolved</h3>
            <p className="text-2xl font-bold mt-2">2.3K</p>
            <p className="text-sm text-gray-500">Last 6 months</p>
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 3 - Service Requests */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 font-medium">Service Requests</h3>
            <p className="text-2xl font-bold mt-2">89%</p>
            <p className="text-sm text-gray-500">Completion Rate</p>
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 4 - Community Engagement */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 font-medium">Community Engagement</h3>
            <p className="text-2xl font-bold mt-2">78%</p>
            <p className="text-sm text-gray-500">Active Participation</p>
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ec4899"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



export default HomeChart
