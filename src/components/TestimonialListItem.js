import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const styles = theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

const TestimonialListItem = ({ classes, testimonial }) => {
  return (
    <GridListTile
      key={testimonial.img}
      style={{
        top: "150%"
      }}
    >
      <img
        src={testimonial.img}
        alt={testimonial.title}
        style={{ top: "150%" }}
      />
      <GridListTileBar
        title={testimonial.title}
        subtitle={<span>by: {testimonial.author}</span>}
        actionIcon={
          <IconButton className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

TestimonialList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TestimonialListItem);
