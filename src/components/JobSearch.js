import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  wrap: {
    background: "rgba(255, 255, 255, 0.15)"
  },
  icon: {
    paddingLeft: "1em",
    fill: "currentColor",
    display: "inline-block",
    userSelect: "none",
    flexShrink: "0"
  },
  searchBar: {
    paddingLeft: "0.7em",
    borderBottom: "none"
  }
});

class JobSearch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrap}>
        <div className={classes.icon}>
          <SearchIcon />
        </div>
        <TextField
          className={classes.searchBar}
          placeholder="Search for Job"
          margin="normal"
          InputProps={{
            disableUnderline: true
          }}
        />
      </div>
    );
  }
}
export default withStyles(styles)(JobSearch);
