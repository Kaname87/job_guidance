import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobGuidanceApp from "./JobGuidanceApp";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={JobGuidanceApp} />
      </Router>
    );
  }
}

export default App;
