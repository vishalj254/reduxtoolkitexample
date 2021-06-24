import React, { useCallback } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { reduxUserById, SET_USERS } from "../../store/reducer";

export default React.memo(({ id, open, handleClose }) => {
  const user = useSelector((state) => reduxUserById(state, id));
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let body = {
        ...user,
        id: id,
        login: event.target.elements.login.value,
        avatar_url: event.target.elements.avatar_url.value,
      };
      dispatch(SET_USERS([body.id, body]));
      handleClose();
    },
    [dispatch, handleClose, id, user]
  );

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">
            {user && user.login ? "Edit User" : "Add User"}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="login"
              name="login"
              label="Login"
              defaultValue={(user && user.login) || ""}
              fullWidth
            />

            <TextField
              margin="dense"
              id="url"
              name="avatar_url"
              label="Avatar URL"
              defaultValue={(user && user.avatar_url) || ""}
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
});
