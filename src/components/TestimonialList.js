import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import TestimonialListItem from "./TestimonialListItem";
const styles = theme => ({
  gridList: {
    height: 450
  }
});

const testimonialList = [
  {
    img:
      "https://4.bp.blogspot.com/-XcIK72-a6tI/Vu0kGkH1FiI/AAAAAAAA4-8/0JF9lDPAjwYDc4nyEUxmBzwXhkVX2v5Ag/s250/ninja8_gray.png",
    title: "A day in the life of Ninja",
    author: "Grey Ninja"
  },
  {
    img:
      "https://1.bp.blogspot.com/-fqZMFq3iqFg/Vu0kFuzXZqI/AAAAAAAA4-0/ANSd6FSGPvUk_1Nc5qyf_MEwv7zBue8Ug/s250/ninja6_white.png",
    title: "How I become Ninja and why",
    author: "White Ninja"
  },
  {
    img:
      "https://3.bp.blogspot.com/-k5XFICQjArU/Vu0kDaE3hPI/AAAAAAAA4-k/S-DwOCwNbtw_J4xfoX6Xdn7JrQ7SPTF9w/s250/ninja2_red.png",
    title: "Career Path of Ninja",
    author: "Red Ninja"
  }
];

const TestimonialList = ({ classes }) => {
  return (
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">Testimonial</ListSubheader>
      </GridListTile>
      {testimonialList.map(testimonial => (
        <TestimonialListItem testimonial={testimonial} />
      ))}
    </GridList>
  );
};

TestimonialList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TestimonialList);
