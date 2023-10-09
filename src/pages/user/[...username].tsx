import React from "react";
import { useRouter } from "next/router";
import axios from "@/utils/axios"; // this is axios instance with baseURL set to http://localhost:4000/api/v1
const Profle = () => {
  const router = useRouter();
  const username = router.query.username;
  axios.get("/user/username");
  return <div>{username}</div>;
};

export default Profle;
