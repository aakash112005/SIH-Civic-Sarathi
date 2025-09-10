import React from 'react'
import { useState } from 'react';

function Feedback() {
   const [complainId, setComplainId] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !feedback.trim()) {
      alert("Please provide a rating and feedback.");
      return;
    }
    // ✅ Here you would send feedback to your backend API
    console.log({ complainId, rating, feedback });
    alert("Thank you for your feedback!");
    setComplainId("");
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">
          We Value Your Feedback
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Help us improve our services by sharing your experience.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Complaint ID (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Complaint ID (optional)
            </label>
            <input
              type="text"
              value={complainId}
              onChange={(e) => setComplainId(e.target.value)}
              placeholder="Enter Complaint ID"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate Your Experience
            </label>
            <div className="flex gap-2 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 font-medium transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}


export default Feedback
