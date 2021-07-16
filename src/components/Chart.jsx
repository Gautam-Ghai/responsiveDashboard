import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//Material-UI
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <Paper style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
