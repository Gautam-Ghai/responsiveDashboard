import React from "react";

//Material-UI
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import MuiTableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableCell = withStyles({
  root: {
    borderBottom: "none"
  }
})(MuiTableCell);

export default function WidgetLg({ name, date, amount, status, img }) {
  return (
    <TableRow>
      <TableCell style={{display: "flex", alignItems: "center"}}>
        <Avatar alt="User Image" src={img} style={{display: "inline-block", marginRight: "10px"}}/>
        <span >{name}</span>
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>
        <Button variant="outlined" color={status === "Approved" ? "secondary" : "primary"} disabled={status === "Declined" ? true : false} disableElevation disableRipple disableFocusRipple>{status}</Button>
      </TableCell>
    </TableRow>
  );
}
