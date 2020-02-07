import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

export default function ListWrap({ items }) {
  return (
    <List>
      {items.map(item => {
        const labelId = `checkbox-list-label-${item.key}`;
        return (
          <ListItem
            className={item.data.isComplete === true ? "complete" : "ssss"}
            key={item.key}
            role={undefined}
            dense
            button
            onClick={() => item.updateTodoStatus(item.todo, "isComplete")}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.data.isChecked}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={item.data.name}
              secondary={`P${item.data.priority}`}
            />
            <ListItemSecondaryAction>{item.secondary}</ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
