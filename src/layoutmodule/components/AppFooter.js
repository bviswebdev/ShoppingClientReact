import React from "react";
import Box from "@mui/material/Box";

const AppFooter = () => {
  return (
    <footer>
      <Box
        sx={[
          {
            display: "flex",
            height: 75,
            justifyContent: "center",
            alignItems: "flex-end",
            bgcolor: "#EEF2FF",
            fontSize: 24,
            fontWeight: 500,
          },
          (theme) => ({
            color: "info.main",
          }),
        ]}
      >
        <p>Please provide frequent feedback for providing better experience.</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#EEF2FF",
          fontSize: 18,
          fontWeight: 400,
        }}
      >
        <p>
          © 2022 Copyright:{" "}
          <a class="text-dark" href="#">
            Medicareapp
          </a>
        </p>
      </Box>
    </footer>
  );
};

export default AppFooter;

/*
<footer>
  <mat-toolbar>
    <mat-toolbar-row
      style="height: 100px"
      fxLayout="row"
      fxLayoutAlign="center end"
    >
      <p>Please provide frequent feedback for providing better experience.</p>
    </mat-toolbar-row>
    <mat-toolbar-row
      style="height: 75px"
      fxLayout="row"
      fxLayoutAlign="center center"
    >
      <p>© 2022 Copyright: <a class="text-dark" href="#">Medicareapp</a></p>
    </mat-toolbar-row>
  </mat-toolbar>
</footer>*/
