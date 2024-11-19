import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import About from "./About";
import StudentAchievement from "./StudentAchievement";
import Alumni from "./Alumni";
import Team from "./Team";
import axios from 'axios';
import Navbar2 from "./Navbar2";
const Home = () => {
  //const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     if (user && user.token) {
  //       try {
  //         const response = await fetch("http://localhost:5000/alumnitracking/home", {
  //           method: "GET",
  //           headers: {
  //             "Authorization": `Bearer ${user.token}`,
  //             "Content-Type": "application/json"
  //           }
  //         });

  //         if (!response.ok) {
  //           throw new Error("Failed to fetch user details");
  //         }

  //         const data = await response.json();
  //         localStorage.setItem("userdetails",data.user);
  //         setUserDetails(data.user);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };

  //   fetchUserDetails();
  // }, []);


  // if (!userDetails) {
  //   return <div>Loading...</div>;
  // }   http://localhost:5000/home



    const [data, setData] = useState(null); // State to store fetched data
    const [loading, setLoading] = useState(true); // State to track loading
  
    useEffect(() => {
      const fetchData = async () => {
        const token = sessionStorage.getItem("token"); // Retrieve token from localStorage
        
        try {
          const response = await fetch("http://localhost:5000/alumnitracking/home", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const result = await response.json(); // Parse the JSON response
          console.log(result);
          setData(result); // Save the result in the state
        } catch (error) {
          console.error("Error fetching data:", error.message);
        } finally {
          setLoading(false); // Stop loading
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <>
        <Navbar2 />
        <div>
  <p>Welcome</p>
  {data && data.user && data.user.username && (
    <h3 style={{ marginTop: "10px" }}>
      Hello, <strong>{data.user.username}</strong>!
    </h3>
  )}
</div>

  
        <Banner />
        <About />
        <StudentAchievement />
        <Alumni />
        <Team />
      </>
    );
  };
  
  export default Home;
  