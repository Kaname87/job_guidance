import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

const chipData = [
  { id: 1, job_id: "1", label: "Education", likeCategory: false },
  { id: 2, job_id: "1", label: "Helping People", likeCategory: true },
  { id: 3, job_id: "2", label: "Medical and Welfare", likeCategory: false },
  { id: 4, job_id: "2", label: "Helping People", likeCategory: true },
  { id: 5, job_id: "3", label: "Judiciary", likeCategory: false },
  { id: 6, job_id: "3", label: "Helping People", likeCategory: true },
  { id: 7, job_id: "4", label: "IT", likeCategory: false },
  {
    id: 8,
    job_id: "4",
    label: "Math, Creating, Enginneering",
    likeCategory: true
  },
  { id: 9, job_id: "5", label: "Talent, Artist, Creator", likeCategory: false },
  { id: 10, job_id: "5", label: "TV, Radio, Youtube", likeCategory: true },
  { id: 11, job_id: "6", label: "Other", likeCategory: false },
  { id: 12, job_id: "6", label: "Anime, Manga", likeCategory: true }
];

class ChipList extends React.Component {
  render() {
    const { classes, jobId } = this.props;

    return (
      <Paper className={classes.root}>
        {chipData.filter(data => data.job_id === jobId).map(data => {
          let avatar = data.likeCategory ? (
            <Avatar>
              <FavoriteIcon />
            </Avatar>
          ) : null;
          return (
            <Chip
              key={data.id}
              avatar={avatar}
              label={data.label}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipList);
