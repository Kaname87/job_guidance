import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class JobSearch extends Component {
  render() {
    return (
      <TextField
        style={{ paddingLeft: 24 }}
        placeholder="Search for Job"
        margin="normal"
      />
    );
  }
}
export default JobSearch;
