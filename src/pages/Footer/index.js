import { Link, Typography } from "@material-ui/core";
import React from "react";

export default React.memo(() => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://www.github.com/vishalj254">
      vishalj254
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
));
