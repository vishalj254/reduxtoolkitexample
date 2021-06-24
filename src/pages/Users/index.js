import React, { useCallback, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USERS, reduxUser, setUsersAsync } from "../../store/reducer";
import { Avatar } from "@material-ui/core";
import Swal from "sweetalert2";
import EditUsers from "./EditUsers";

const useStyles = makeStyles((theme) => ({
  avatarRoot: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    minWidth: 275,
    margin: 10,
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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    margin: 10,
  },
}));

export default React.memo(() => {
  const users = useSelector(reduxUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState({ show: false, id: 0 });

  const handleClose = useCallback(() => {
    setOpen((state) => ({ ...state, show: !state.show }));
  }, []);

  const handleOpen = useCallback((id) => {
    setOpen((state) => ({ ...state, show: !state.show, id }));
  }, []);

  const handleDelete = useCallback(
    (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          dispatch(DELETE_USERS(id));
          Swal.fire("Deleted!", "Your record has been deleted.", "success");
        }
      });
    },
    [dispatch]
  );

  return (
    <>
      <div className={[classes.main, classes.margin]}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => dispatch(setUsersAsync())}
          className={classes.margin}
        >
          Fetch All Users (Async)
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => handleOpen(new Date().valueOf())}
          className={classes.margin}
        >
          Add User
        </Button>
      </div>
      <div className={classes.main}>
        {useMemo(() => Object.values(users), [users]).map((item) => (
          <Card key={item.id} className={classes.root}>
            <CardContent>
              <div className={classes.avatarRoot}>
                <Avatar src={item.avatar_url} className={classes.large} />
              </div>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.login}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button size="small" onClick={() => handleOpen(item.id)}>
                Edit
              </Button>
              <Button size="small" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {open.show && (
        <EditUsers id={open.id} handleClose={handleClose} open={open.show} />
      )}
    </>
  );
});
