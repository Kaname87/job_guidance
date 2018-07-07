import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import JobListItem from "./JobListItem";
import dataList from "./../data.json";

const jobList = dataList.map(data => (
  <Grid item xs={12} sm={6} lg={4} xl={3}>
    <JobListItem
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
