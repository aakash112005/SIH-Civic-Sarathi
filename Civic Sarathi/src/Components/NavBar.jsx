// import React from 'react'
// import { Link } from "react-router-dom"
// import Logo from "../assets/Logo.png"

// function NavBar() {
//     return (
//         <header className="shadow-sm">
//       <nav className="max-w-8xl mx-auto flex items-center justify-between px-12 py-3 ">
        
//         {/* Logo */}
//         <div className="flex items-center space-x-2 cursor-pointer">
//           <img src={Logo} alt="" height={60} width={150} className="cursor-pointer"/>
//         </div>

//         {/* Center Nav Links */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/citizen-dashboard">Citizen Dashboard</Link></li>
//           <li><Link to="/department-dashboard">Department Dashboard</Link></li>
//           <li><Link to="/complaint-status">Progress Tracking</Link></li>
//           <li><Link to="/feedback">Feedback</Link></li>
//           <li><Link to="/rewards">Reward Section</Link></li>
//           <li>
//             <Link to="/chatbot" className="text-blue-600 font-semibold">
//               Chatbot Support
//             </Link>
//           </li>
//         </ul>

//         {/* Right Buttons */}
//         <div className="flex space-x-3">
//           <Link
//             to="/login"
//             className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </nav>
//     </header>
//     )
// }

// export default NavBar









import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // menu icons
import Logo from "../assets/Logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-sm">
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            height={60}
            width={150}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/citizen-dashboard">Citizen Dashboard</Link></li>
          <li><Link to="/department-dashboard">Department Dashboard</Link></li>
          <li><Link to="/complaint-status">Progress Tracking</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/rewards">Reward Section</Link></li>
          <li>
            <Link to="/chatbot" className="text-blue-600 font-semibold">
              Chatbot Support
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/citizen-dashboard" onClick={() => setMenuOpen(false)}>Citizen Dashboard</Link></li>
            <li><Link to="/department-dashboard" onClick={() => setMenuOpen(false)}>Department Dashboard</Link></li>
            <li><Link to="/complaint-status" onClick={() => setMenuOpen(false)}>Progress Tracking</Link></li>
            <li><Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link></li>
            <li><Link to="/rewards" onClick={() => setMenuOpen(false)}>Reward Section</Link></li>
            <li>
              <Link
                to="/chatbot"
                className="text-blue-600 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Chatbot Support
              </Link>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
