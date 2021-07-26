import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { viewAnalycticsdata } from "../dummyData";

//Material-UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function ViewAnalyctics() {
  return (
    <Paper style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        View Analyctics
      </Typography>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={viewAnalycticsdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
