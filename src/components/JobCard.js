import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const JobCard = ({ title, imageUrl, description }) => {
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
      <CardActions>
        <Button size="small" color="primary" target="_blank">
          <Link to="/detail">See Detail</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
