// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
 
//   // Redirect to login if no token is found
//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Redirect to login if no token exists
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

