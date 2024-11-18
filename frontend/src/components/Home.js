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
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
  
        try {
          const response = await fetch("http://localhost:5000/alumnitracking/home", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const result = await response.json(); // Parse the JSON response
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
          <h1>Home Page</h1>
          {/* Display a loading message or fetched data */}
          {loading ? (
            <p>Loading...</p>
          ) : data ? (
            <p>{data.msg}</p> // Access the `msg` property from the fetched data
          ) : (
            <p>No data available</p>
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
  