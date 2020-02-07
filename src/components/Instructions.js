import React from "react";
import CardWrap from "./CardWrap";
import Typography from "@material-ui/core/Typography";

export default function Instructions() {
  return (
    <CardWrap>
      <Instructions />
      <Typography variant="body2" component="p">
        Welcome to the Todo List Application
      </Typography>
      <Typography style={{ margin: "10px 0" }} variant="h5" component="h3">
        Instructions
      </Typography>
      <Typography variant="body2" component="p">
        Add items at the bottom of the screen
      </Typography>
      <Typography variant="body2" component="p">
        Click (/) to mark a task as complete
      </Typography>
      <Typography variant="body2" component="p">
        Click (/) to delete a complete
      </Typography>
      <Typography variant="body2" component="p">
        Click (/) to increase the priority
      </Typography>
      <Typography variant="body2" component="p">
        Click (/) to decrease the priority
      </Typography>
    </CardWrap>
  );
}
