import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { reduxUserById, SET_USERS } from "../store/reducer";

export default function EditUsers({ id, open, handleClose }) {
  const user = useSelector((state) => reduxUserById(state, id));
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    let body = {
      ...user,
      login: event.target.elements.login.value,
      avatar_url: event.target.elements.avatar_url.value,
    };
    dispatch(SET_USERS([body.id, body]));
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="login"
              name="login"
              label="Login"
              defaultValue={user.login}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="url"
              name="avatar_url"
              label="Avatar URL"
              defaultValue={user.avatar_url}
              type="url"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
