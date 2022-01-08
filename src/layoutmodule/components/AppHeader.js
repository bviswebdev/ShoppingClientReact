import React from "react";
import AppMobileNav from "./AppMobileNav";
import AppNav from "./AppNav";
import Box from "@mui/material/Box";

const AppHeader = () => {
  return (
    <header>
      <nav>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <AppNav />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <AppMobileNav />
        </Box>
      </nav>
    </header>
  );
};

export default AppHeader;
