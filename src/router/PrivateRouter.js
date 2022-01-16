
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import Detail from '../pages/Detail'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'

import UpdateBlog from '../pages/UpdateBlog'


const PrivateRouter = (props) => {
  console.log("props: ", props);
  let { currentUser } = useAuth();

  //!Just for testing purpose
  // currentUser = {
  //   email: "a@gmailcom",
  // };

  return currentUser ? (
    
    <Routes>
    <Route path="/detail/:id" element={<Detail/>} />
    <Route path="/new-blog" element={<NewBlog/>} />
    <Route path="/profile:id" element={<Profile/>} />
    <Route path="/updateBlog/:id" element={<UpdateBlog/>} />
    </Routes>

  ) : (
    <Link to="/login" />
  );
};

export default PrivateRouter;