import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const NavButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#025acc",
    borderColor: "#0062cc",
    //backgroundColor: "#000",
    //color: "rgb(250, 154, 170)",
    //#025acc
    //#024ccc
  },
});

const NavButtonLink = ({ linkText, linkUrl }) => {
  return (
    <NavButton
      component={NavLink}
      to={linkUrl}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#2255b3" : "",
          borderColor: isActive ? "#0062cc" : "",
        };
      }}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      {linkText}
    </NavButton>
  );
};

NavButtonLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default NavButtonLink;
