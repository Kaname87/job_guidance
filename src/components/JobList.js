import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// Job
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const job = (
  <Card>
    <CardMedia
      style={{ height: 0, paddingTop: "56.25%" }}
      image={
        "https://4.bp.blogspot.com/-nqMYX7dYqyk/V6HTjMit2NI/AAAAAAAA84Y/N3lmHKgdB50UxKt7cMqSt2vXnMEp0qywQCLcB/s400/kaisya_shigoto_music_woman.png"
      }
      title="Sample Job"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        Sample Job
      </Typography>
      <Typography component="p">This is a sample Job </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" target="_blank">
        Go To Job Detail
      </Button>
    </CardActions>
  </Card>
);

class JobList extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid container spacing={24} style={{ padding: 24 }}>
            {[1, 2, 3].map(idx => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                {job}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
export default JobList;
