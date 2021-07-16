import React from "react";

//Material-UI
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function TopProducts({ product, company }) {
  return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ShoppingCartIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={product} secondary={company} />
          <ListItemSecondaryAction>
            <IconButton edge="next" aria-label="next">
              <ArrowForwardIosIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
  );
}
