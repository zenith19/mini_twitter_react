import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./Component/User";

const Followings = () => {
  let userId = JSON.parse(localStorage.getItem("loginData")).id;
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/user_followings/" + userId)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} item={user} />
      ))}
    </div>
  );
};

export default Followings;
