import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/utils/axios";

const Profile = () => {
  const router = useRouter();
  const username = router.query.username;
  const [userData, setUserData]: any = useState(null);
  useEffect(() => {
    if (username) {
      axios
        .get(`/user/profile/${username}`)
        .then((response) => {
          setUserData(response.data); // Assuming the response contains user data
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [username]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.username}</h1>
          {/* Render other user data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
