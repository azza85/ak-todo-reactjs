import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

export default function InputWrap({ label, action, value, id, onChange }) {
  return (
    <Paper component="form" className={"input-wrap"}>
      <InputBase
        className="input"
        placeholder={label}
        inputProps={{
          onChange: onChange,
          id: id,
          "aria-label": { label },
          value: value
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            event.preventDefault();
            action();
          }
        }}
      />
      <IconButton
        disabled={value === "" ? true : false}
        onClick={action}
        className="button"
        color="primary"
        aria-label="submit"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
