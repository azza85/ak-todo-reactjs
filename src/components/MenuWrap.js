import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuWrap({ label, id, options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls={id} aria-haspopup="true" onClick={handleClick}>
        {label}
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map(option => {
          const optionAction = () => {
            option.action();
            handleClose();
          };
          return (
            <MenuItem key={option.key} onClick={optionAction}>
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
