import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ChipList from "./ChipList";

class JobListItem extends Component {
  state = {
    upVoteClicked: false,
    upVoteNum: 0
  };

  handleUpVote = e =>
    this.setState(prevState => ({
      upVoteClicked: true,
      upVoteNum: prevState.upVoteNum + 1
    }));

  render() {
    const { id, title, imageUrl, description } = this.props;

    const favButtonColor = this.state.upVoteClicked ? "red" : "grey";

    return (
      <Card>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "56.25%",
            backgroundPosition: "0% 10%"
          }}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <ChipList jobId={id} />
        <CardActions style={{ display: "flex" }}>
          <Button size="small" color="primary" target="_blank">
            <Link to={`/job_detail/${id}`}>See Detail</Link>
          </Button>
          <div style={{ marginLeft: "auto" }}>
            <Button
              size="small"
              color="primary"
              target="_blank"
              onClick={this.handleUpVote}
            >
              <FavoriteIcon style={{ color: favButtonColor }} />
            </Button>
            <span
              style={{ fontFamily: "Roboto , Helvetica , Arial , sans-serif" }}
            >
              {this.state.upVoteNum}
            </span>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default JobListItem;
