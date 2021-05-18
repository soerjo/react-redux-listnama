import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { deleteData } from "../data/feature/storing";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "80%",
    minWidth: 275,
    margin: "auto",
    marginBottom: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserList({ user }) {
  const classes = useStyles();

  const { name, describe } = user;
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          User Name:
        </Typography>
        <Typography variant="h5" component="h2">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {describe}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(deleteData(name))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
