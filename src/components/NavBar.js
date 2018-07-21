import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import JobSearch from "./JobSearch";

const NavBar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", top: 0 }}>
      <AppBar position="fixed" color="primary" style={{ height: "3em" }}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            style={{ flex: "2", fontSize: "2em" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              JobPedia
            </Link>
          </Typography>
          {/* <div style={{ flex: "1" }}>
            <JobSearch />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
