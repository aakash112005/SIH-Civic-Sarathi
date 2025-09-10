

import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

export default function Footer() {
  return (
   
           <footer className="bg-blue-50 border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center space-x-2 cursor-pointer mb-4">
                     <img src={Logo} alt="" height={60} width={150} className="cursor-pointer"/>
            </div>
            <p className="text-gray-600 text-sm">
              Simplifying civic engagement with transparent workflows and fast responses.
            </p>
            <p className="text-gray-400 text-xs mt-4">© 2025 CiviSarathi All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-gray-600">
              
              <li><Link to={"/citizen-dashboard"} className="hover:text-gray-900">Citizen</Link></li>
              <li><Link to={"/department-dashboard"} className="hover:text-gray-900">Department</Link></li>
              <li><Link to={"/feedback"} className="hover:text-gray-900">Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to={"/about"} className="hover:text-gray-900">About</Link></li>
              <li><Link to={"/contact"} className="hover:text-gray-900">Contact</Link></li>
              <li><Link to={"/careers"} className="hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to={"/chatbot"} className="hover:text-gray-900">Help Center</Link></li>
              <li><Link to={"/complaint-status"} className="hover:text-gray-900">Status</Link></li>
              <li><Link to={"/privacy"} className="hover:text-gray-900">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </footer>

  );
}