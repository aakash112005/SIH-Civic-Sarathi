import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProgressTracking() {
    const [complainId,setComplainId]= useState("");
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">Track Your Complain!</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter Complain Id
        </p>

        {/* Form */}
        <form className="space-y-4">
         
          <div className='gap-4'>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Complain ID
            </label>
            <input
              value={complainId}
             onChange={(e) => setComplainId(e.target.value)}
              required
              
              type="text"
              placeholder="Enter your Complain ID"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

         
         

          
          {/* Button */}
          <Link to={`/progress/${complainId}`}>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 font-medium transition mt-4"
          >
            Check
          </button>
          </Link>
        </form>

        {/* Footer */}
       
      </div>
    </div>
    )
}

export default ProgressTracking
