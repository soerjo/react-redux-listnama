import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { store } from "../data/feature/storing";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [describe, setDescribe] = React.useState("");
  const boolean = true;

  function isFine() {
    return name && describe && boolean;
  }

  const handleAddUser = (event) => {
    event.preventDefault();
    const value = {
      name: name,
      describe: describe,
    };
    //some function to input variable value to database
    dispatch(store(value));

    setName("");
    setDescribe("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="email"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            id="describe"
            label="Describe the user"
            required
            fullWidth
            multiline
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
          />
          <Button
            disabled={isFine() ? false : true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </form>
      </div>
    </Container>
  );
}
