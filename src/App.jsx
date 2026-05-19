import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import CandidateDetails from "./pages/CandidateDetails";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Jobs */}
      <Route path="/jobs" element={<Jobs />} />

      {/* Job Details */}
      <Route path="/job-details" element={<JobDetails />} />

      {/* Candidates */}
      <Route path="/candidates" element={<Candidates />} />

      {/* Candidate Details */}
      <Route path="/candidate-details" element={<CandidateDetails />} />
    </Routes>
  );
}

export default App;
