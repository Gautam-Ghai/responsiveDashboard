import React from "react";

//Material-UI
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import { Hidden, IconButton } from "@material-ui/core";

export default function WidgetSm({ name, title, img }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="User Image" src={img} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={title} />
      <ListItemSecondaryAction>
        <Hidden smDown>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Visibility />}
          >
            <Hidden mdDown>Display</Hidden>
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton>
            <Visibility />
          </IconButton>
        </Hidden>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
