import React from "react";
import { useParams, Link } from "react-router-dom";

function Progress() {
  const { complainId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Link */}
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Complaints
        </Link>

        {/* Header */}
        <h1 className="text-2xl font-bold">
          Complaint {complainId ? `CMP-${complainId}` : ""}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Complaint Overview */}
          <div className="bg-white shadow rounded-lg p-4 space-y-2">
            <h2 className="font-semibold">Complaint Overview</h2>
            <p><strong>Complaint ID:</strong> CMP-{complainId}</p>
            <p><strong>Category:</strong> Service Interruption</p>
            <p><strong>Filed Date:</strong> March 20, 2025</p>
            <p><strong>Last Update:</strong> March 25, 2025</p>
            <p><strong>Resolution Target:</strong> March 30, 2025</p>
            <p><strong>Priority:</strong> High</p>
          </div>

          {/* Progress Status */}
          <div className="bg-white shadow rounded-lg p-4 lg:col-span-2">
            <h2 className="font-semibold mb-2">Progress Status</h2>
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <span>Submitted</span>
              <span>Under Review</span>
              <span>Investigation</span>
              <span>Resolution</span>
              <span>Monitoring</span>
              <span>Resolved</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-blue-600 h-2 rounded-full w-3/5"></div>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-4">Recent Updates</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p><strong>Feb 24, 2025, 10:00 AM</strong> — Complaint filed by user via online portal.</p>
            </li>
            <li>
              <p><strong>March 24, 2025, 08:00 AM</strong> — Complaint acknowledged. Assigned to Technical Support Team for investigation.</p>
            </li>
            <li>
              <p><strong>March 25, 2025, 05:15 PM</strong> — Diagnostics initiated. No immediate external issue identified. Scheduling onsite visit to inspect equipment.</p>
            </li>
            <li>
              <p><strong>June 26, 2025, 10:45 AM</strong> — Onsite visit completed. Faulty router identified and replaced with new unit. Service restored for initial testing phase.</p>
            </li>
            <li>
              <p><strong>Augest 28, 2025, 09:00 AM</strong> — Monitoring period initiated to ensure stability. Customer requested an extension for full verification before closure.</p>
            </li>
          </ul>
        </div>

        {/* Complaint Information */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-4">Complaint Information</h2>
          <p className="text-sm text-gray-700">
            The internet service has been intermittently failing since March 8th.
            This is impacting business operations significantly, especially during
            peak hours, leading to reduced productivity and potential revenue loss.
            Efforts to troubleshoot locally have been unsuccessful, and the issue
            has required beyond basic user intervention. Detailed logs and network
            diagnostics have been attached for technical review.
          </p>
          <h3 className="font-semibold mt-4">Attachments</h3>
          <ul className="list-disc pl-6 text-blue-600 text-sm">
            <li><a href="#">ServiceLogs_20240321.pdf</a></li>
            <li><a href="#">NetworkDiagnostics_20240318.png</a></li>
            <li><a href="#">IncidentReport_Q1_2024.xlsx</a></li>
          </ul>
        </div>

        {/* Resolution Timeline */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-4">Resolution Timeline & Next Steps</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>March 24, 2025:</strong> Initial service stability check with customer to confirm ongoing performance.</li>
            <li><strong>March 25, 2025:</strong> Final status confirmation with customer and closure readiness assessment.</li>
            <li><strong>June 26, 2025:</strong> Complaint officially closed if no further issues or escalations are reported.</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded-lg">Contact Support</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add Update</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Close Complaint</button>
        </div>
      </div>
    </div>
  );
}

export default Progress;
