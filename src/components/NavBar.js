import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import JobSearch from "./JobSearch";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              Job Guidance
            </Link>
          </Typography>
          <JobSearch />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
