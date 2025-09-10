import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import SignupPage from "./Components/SignUp"
import CitizenDashboard from "./Components/CitizenDashBoard"
import DepartmentDashboard from "./Components/DepartmentDashboard"
import SuperAdmin from "./Components/SuperAdmin"
import DistrictDetail from "./Components/DistrictDetail"
import ReportIssue from "./Components/ReportIssue"
import ProgressTracking from "./Components/ProgressTracking"
import Progress from "./Components/Progress"
import Rewards from "./Components/Rewards"
import Feedback from "./Components/feedback"
import ChatBot from "./Components/ChatBot"
import Services from "./Components/Services"
import Resources from "./Components/Resources"
import Privacy from "./Components/Privacy"
import Careers from "./Components/Careers"


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
      <Route path="/department-dashboard" element={<DepartmentDashboard />} />
      <Route path="/superadmin-dashboard" element={<SuperAdmin />} />
      <Route path="/district/:districtName" element={<DistrictDetail />} />
      
      <Route path="/report" element={<ReportIssue />} />
      <Route path="/complaint-status" element={<ProgressTracking />} />
      <Route path="/progress/:complainId" element={<Progress />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<Resources />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/careers" element={<Careers />} />
      
    </Routes>
    </>
  )
}

export default App
