import ProtectedRoute from "./ProtectedRoute";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AlumniSpace from "./components/AlumniSpace";
import Gallery from "./components/Gallery";
import DualSignup from "./components/DualSignup";
import DualLogin from "./components/DualLogin";
import Footer from "./components/Footer";
import CreateJob from "./components/CreateJob";
import Jobs from "./components/Jobs";
import CreateEvent from "./components/CreateEvent";
import Events from "./components/Events";
import AdminLogin from "./components/AdminLogin";
import Login from "./components/AlumniLogin";
import StudentLogin from "./components/StudentLogin";
import "./App.css"; // Import the App.css file
import EmailVerification from "./components/EmailVerification";
import StudentEmailVerification from "./components/StudentEmailVerification";
import Navbar2 from "./components/Navbar2";

const App = () => {
  // const { isLoggedIn, setIsLoggedIn } = useState(false);

  // // Check login state on initial render from localStorage
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setIsLoggedIn(true); // User is logged in
  //   } else {
  //     setIsLoggedIn(false); // User is not logged in
  //   }
  // }, []); // Empty dependency array to run only on initial render

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
            <Route path="/dual-signup" element={<DualSignup />} />
            <Route path="/alumni-login" element={<Login />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/alumni-space" element={<AlumniSpace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/" element={<DualLogin />} />
             {/*<Route path="/alumni-home" element={<Home/>} />  */}
            <Route path="/verify-email" element={<EmailVerification/>}/>
            <Route path="/verifystudentemail" element={<StudentEmailVerification/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
