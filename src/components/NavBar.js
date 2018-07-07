import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import JobSearch from "./JobSearch";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Job Guidance
          </Typography>
          <JobSearch />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
