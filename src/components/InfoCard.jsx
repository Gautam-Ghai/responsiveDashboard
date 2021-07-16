import React from "react";

//Material-UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function InfoCard({ title, amount, difference }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ display: "inline-block", marginRight: "20px" }}
          >
            {amount}
          </Typography>
          <Typography
            variant="body1"
            style={{ display: "inline-block", marginRight: "20px" }}
          >
            {difference}
          </Typography>
          <span style={{ display: "inline-block" }}>
            {parseFloat(difference) > 0 ? (
              <ArrowUpward style={{ color: "green" }} />
            ) : (
              <ArrowDownward style={{ color: "red" }} />
            )}
          </span>
        </div>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Compared to last month!
        </Typography>
      </CardContent>
    </Card>
  );
}
