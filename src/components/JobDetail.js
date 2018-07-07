import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import Grid from "@material-ui/core/Grid";

import dataList from "./../data.json";
const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 5
  },
  gridList: {
    // width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

const data = dataList.find(d => d.title === "Ninja");
const { title, imageUrl, description } = data;
const JobDetail = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="display3" gutterBottom>
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
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">Testimonial</ListSubheader>
            </GridListTile>
            {[
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
            ].map(tile => (
              <GridListTile
                key={tile.img}
                style={{
                  // height: "100pz"
                  //   paddingTop: "56.25%",
                  // backgroundPosition: "0% 10%"
                  top: "150%"
                }}
              >
                <img src={tile.img} alt={tile.title} style={{ top: "150%" }} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
};

JobDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobDetail);
