import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobList from "./JobList";
import JobDetail from "./JobDetail";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <NavBar />
            <Route exact path="/" component={JobList} />
            <Route path="/job_detail/:id" component={JobDetail} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
