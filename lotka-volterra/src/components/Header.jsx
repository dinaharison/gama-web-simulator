import React from "react";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ width: 1, height: "10%" }}>
      <Typography variant="h4" textAlign="center" sx={{ width: 1 }}>
        Lotka - Volterra
      </Typography>
    </Box>
  );
}

export default Header;
