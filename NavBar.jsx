import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items">AIQuest Interviews</div>
        <div className="right">
        <Link to="/demo" className="nav_items">
            Interview Demo
          </Link>
          {/* <a href="#Why AIQuest" className="nav_items">
          Why AIQuest
          </a> */}
          <Link to="/interview" className="nav_items">
          Post
          </Link>
          <Link to="/question-generation" className="nav_items">
          Generate Questions
          </Link>
          <Link to="/login" className="nav_items">
            Login
          </Link>
          <Link to="/signup" className="nav_items">
            Signup
          </Link>
          <Link to="/logout" className="nav_items">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;