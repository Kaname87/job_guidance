import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import JobList from "./JobList";
import JobDetail from "./JobDetail";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

const basename = "/job_guidance";

class App extends Component {
  render() {
    return (
      <Router basename={basename}>
        <ScrollToTop>
          <div style={{ paddingTop: "3.5em" }}>
            <NavBar />
            <Switch>
              <Route path="/job_detail/:id" component={JobDetail} />
              <Route path="/" component={JobList} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
