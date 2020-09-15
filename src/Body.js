import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import FullPost from "./FullPost";
import Profile from "./Profile";
import SignUp from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Followings from "./Followings";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/posts/:postId">
          <FullPost />
        </Route>
        <Route exact path="/users/:userId">
          <Profile />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/followings">
          <Followings />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
