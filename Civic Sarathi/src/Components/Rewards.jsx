import React from 'react'
import Footer from './Footer';

function Rewards() {
    const rewards = [
  {
    title: "Home Loan Concession",
    description:
      "Receive a significant reduction on interest rates for your new home loan as a recognition for your active civic participation.",
    criteria: [
      "Minimum 10 successful issue resolutions",
      "Maintain a positive feedback score above 4.5 stars for 6 months",
      "Active Civic Sarathi account for 12+ months",
    ],
    button: "Claim Now",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blood Bank Concession",
    description:
      "Get exclusive discounts on medical services and free health check-ups for regular blood donations to local blood banks.",
    criteria: [
      "Minimum 3 blood donations in the last 12 months",
      "Registered with a certified blood bank partner",
      "Active Civic Sarathi account for 6+ months",
    ],
    button: "Learn More",
    image:
      "https://www.drsstantiamch.org/uploads/infrastructure/blood_bank.jpg",
  },
  {
    title: "Public Transport Pass",
    description:
      "Enjoy a monthly public transport pass at a subsidized rate, encouraging sustainable travel and community engagement.",
    criteria: [
      "Participated in 5+ community events",
      "Zero traffic violations in the last 12 months",
      "Active Civic Sarathi account for 3+ months",
    ],
    button: "Apply Today",
    image:
      "https://img.freepik.com/free-vector/passengers-waiting-bus-city-queue-town-road-flat-vector-illustration-public-transport-urban-lifestyle_74855-8493.jpg",
  },
];
    return (
        <>
       <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Unlock Your Rewards</h1>
          <p className="text-gray-600 mt-2">
            Discover exclusive benefits and concessions earned through your
            active participation and contributions to civic welfare.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={reward.image}
                alt={reward.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="font-bold text-lg">{reward.title}</h2>
                <p className="text-sm text-gray-600 mt-2">
                  {reward.description}
                </p>

                {/* Eligibility */}
                <h3 className="font-semibold text-sm mt-4">
                  Eligibility Criteria:
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                  {reward.criteria.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto pt-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg font-medium">
                    {reward.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
    )
}

export default Rewards
