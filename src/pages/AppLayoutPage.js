import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { AppHeader, AppFooter } from "../layoutmodule";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AppLayoutPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `'header header header' 
         'content content content'
         'footer footer footer'`,
        gap: 1,
      }}
    >
      <Box sx={{ border: "2px dashed grey", gridArea: "header" }}>
        <AppHeader />
      </Box>
      <Box
        sx={{ border: "2px dashed grey", gridArea: "content", height: "75vh" }}
      >
        <Outlet />
      </Box>
      <Box sx={{ border: "2px dashed grey", gridArea: "footer" }}>
        <AppFooter />
      </Box>
    </Box>
  );
};

export default AppLayoutPage;

/*
 <Box component="div" sx={{ border: "2px dashed grey" }}>
      <Grid container sx={{ border: "2px solid blue" }}>
        <Grid item xs={12} sx={{ border: "2px dashed grey" }}>
          <AppHeader />
        </Grid>
        <Grid item xs={12} sx={{ border: "2px dashed grey" }}>
          <Outlet />
        </Grid>
        <Grid item xs={12} sx={{ border: "2px dashed grey" }}>
          <AppFooter />
        </Grid>
      </Grid>
    </Box>*/
