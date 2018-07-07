import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";

import JobCard from "./JobCard";
import dataList from "./../data.json";

const jobList = dataList.map(data => (
  <Grid item xs={12} sm={6} lg={4} xl={3}>
    <JobCard
      id={data.id}
      title={data.title}
      description={data.description}
      imageUrl={data.imageUrl}
    />
  </Grid>
));

class JobList extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid container spacing={24} style={{ padding: 24 }}>
            {jobList}
          </Grid>
        </div>
      </div>
    );
  }
}
export default JobList;
