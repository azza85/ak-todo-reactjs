import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
export default function AppBarWrap({ title, rightContent }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="flex flex-between">
          <Typography variant="h6" style={{ flex: 1 }}>
            {title}
          </Typography>
          {rightContent !== null ? rightContent : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
