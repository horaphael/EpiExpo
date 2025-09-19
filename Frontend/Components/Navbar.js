import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ededed",
        borderRadius: "20px",
        mt: "10px",
        mx: "20px",
        width: "calc(100% - 40px)",
        position: "fixed",
        zIndex: 100
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton edge="start" aria-label="menu">
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography variant="body2" sx={{ color: "black" }}>
            Espace Creation
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            Espace Expo
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
