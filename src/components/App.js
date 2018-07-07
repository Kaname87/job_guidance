import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobList from "./JobList";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" component={JobList} />
        </div>
      </Router>
    );
  }
}

export default App;
