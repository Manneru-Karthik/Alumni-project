// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import AlumniSpace from "./components/AlumniSpace";
// import Gallery from "./components/Gallery";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Footer from "./components/Footer";
// import "./App.css";
// import EmailVerification from "./components/EmailVerification";
// import StudentEmailVerification from "./components/StudentEmailVerification";
// import MainContainer from "./Chatcomponents.js/MainContainer";
// import Welcome from "./Chatcomponents.js/Welcome";
// import ChatArea from "./Chatcomponents.js/ChatArea";
// import Users from "./Chatcomponents.js/Users";
// import Groups from "./Chatcomponents.js/Groups";
// import CreateGroups from "./Chatcomponents.js/CreateGroups";
// import { useDispatch, useSelector } from "react-redux";


// const App = () => {
//   // const lightTheme = useSelector((state) => state.themeKey);
//   return (
//     <Router>
//       <div className="App"> 
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/alumni-space" element={<AlumniSpace />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/verify-email" element={<EmailVerification/>}/>
//           <Route path="/verifystudentemail" element={<StudentEmailVerification/>}/>   
//           <Route path="/home" element={<Home/>}/>   
          
//          {/* <Routes> */}
//         {/* <Route path="app" element={<MainContainer />}>
//           <Route path="welcome" element={<Welcome />}></Route>
//           <Route path="chat/:_id" element={<ChatArea />}></Route>
//           <Route path="users" element={<Users />}></Route>
//           <Route path="groups" element={<Groups />}></Route>
//           <Route path="create-groups" element={<CreateGroups />}></Route>
//         </Route> */}
//       {/* </Routes> */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
import Navbar2 from "./components/Navbar2";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App2 = () => {
  return (
    <Router>
      <div className="app">
        <Navbar2 />
        <div className="content">
          <Routes>
            <Route path="/afterlogin" element={<Home />} /> 
            <Route path="/alumni-space" element={<AlumniSpace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dual-signup" element={<DualSignup />} />
            <Route path="/jobs" element={<Jobs />} />
          <Route path="/create-job" element={<CreateJob />} />
            <Route path="/events" element={<Events />} />
             {/*<Route path="/alumni-home" element={<Home/>} />  */}
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App2;