import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const HomeComponent = () => {
  const dispatch = useDispatch();
  console.log("I am from HomeComponent");
  return (
    <div>
      <h1>This is home page route</h1>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "TEST_INCREMENT" })}
      >
        Home Component
      </Button>
      <br />
      <Link to="/test">Click Here</Link>
    </div>
  );
};

export default HomeComponent;
