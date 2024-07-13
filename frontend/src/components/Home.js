import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import About from "./About";
import StudentAchievement from "./StudentAchievement";
import Alumni from "./Alumni";
import Team from "./Team";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.token) {
        try {
          const response = await fetch("http://localhost:5000/alumnitracking/userdetails", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${user.token}`,
              "Content-Type": "application/json"
            }
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }

          const data = await response.json();
          setUserDetails(data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <>
      <Banner />
      <About />
      <StudentAchievement />
      <Alumni />
      <Team />
    </>
  );
};

export default Home;
