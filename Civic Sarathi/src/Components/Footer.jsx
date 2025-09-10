

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
              <li><a href="/citizen-dashboard" className="hover:text-gray-900">Citizen</a></li>
              <li><a href="/department-dashboard" className="hover:text-gray-900">Department</a></li>
              <li><a href="/feedback" className="hover:text-gray-900">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-gray-900">About</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="/careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/chatbot" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="/complaint-status" className="hover:text-gray-900">Status</a></li>
              <li><a href="/privacy" className="hover:text-gray-900">Privacy</a></li>
            </ul>
          </div>
        </div>
      </footer>

  );
}