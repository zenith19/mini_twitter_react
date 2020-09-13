import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./Component/User";
import { useParams } from "react-router-dom";
import UserPosts from "./UserPosts";

const Profile = (props) => {
  const [user, setUser] = useState({});
  let { userId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/users/" + userId)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [userId]);
  return (
    <div>
      <h6>User Profile</h6>
      <User item={user} />
      <UserPosts userId={user.id} />
    </div>
  );
};

export default Profile;
