import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={NavLink} to="/">
            Ishi
          </Button>
        </Typography>

        <Button color="inherit" component={NavLink} to="/posts">
          App
        </Button>
        <Button color="inherit" component={NavLink} to="/assignment">
          Test
        </Button>
        <Button color="inherit" component={NavLink} to="/explanation">
          Explanation
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
