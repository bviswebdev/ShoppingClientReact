import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import PropTypes from "prop-types";

const NavAnchorLink = ({ linkText, linkUrl, linkVariant, linkColor }) => {
  return (
    <Link
      variant={linkVariant}
      color={linkColor}
      noWrap
      underline="none"
      component={NavLink}
      to={linkUrl}
    >
      {linkText}
    </Link>
  );
};

NavAnchorLink.defaultProps = {
  linkVariant: "h6",
  linkColor: "#fff",
};

NavAnchorLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default NavAnchorLink;
