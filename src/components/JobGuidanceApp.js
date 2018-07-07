import React, { Component } from "react";

import NavBar from "./NavBar";
import JobList from "./JobList";

class JobGuidanceApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JobList />
      </div>
    );
  }
}

export default JobGuidanceApp;
