import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TestimonialList from "./TestimonialList";
import dataList from "./../data.json";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 5
  }
});

const JobDetail = ({ classes, match }) => {
  const data = dataList.find(d => d.id === match.params.id);
  const { title, imageUrl, description } = data;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="display4" gutterBottom>
            {title}
          </Typography>
          <img src={imageUrl} alt={title} />
          <Typography variant="headline" gutterBottom>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}> */}
          <Typography variant="display1" gutterBottom>
            What kind of job is this ?
          </Typography>
          <Typography gutterBottom>
            {`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display1" gutterBottom>
            How can I get This Job?
          </Typography>
          <Typography
            gutterBottom
            style={{ fontSize: "1.2em", textAlign: "left" }}
          >
            {`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TestimonialList />
        </Grid>
      </Grid>
    </div>
  );
};

JobDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobDetail);
