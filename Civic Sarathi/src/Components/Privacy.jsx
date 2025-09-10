import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          At Civic Sarathi, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you use our
          platform.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              We may collect information that you provide directly to us such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Complaint details and Complaint ID</li>
              <li>Location information (with your permission)</li>
              <li>Feedback and survey responses</li>
              <li>Basic contact details (if provided)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600">
              Your information is used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>To register and track complaints</li>
              <li>To provide location-based services</li>
              <li>To improve our platform and services</li>
              <li>To send important updates or notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600">
              We do not sell your personal data. Information may only be shared with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Authorized government departments to resolve complaints</li>
              <li>Service providers working with us to improve functionality</li>
              <li>When required by law or legal processes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement strict security measures to protect your data from
              unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              5. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              information. You may also withdraw location permissions at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              6. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions regarding this Privacy Policy, please
              contact us at:{" "}
              <span className="font-medium text-gray-800">
                support@civicsarathi.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
