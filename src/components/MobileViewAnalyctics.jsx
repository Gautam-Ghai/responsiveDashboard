import React from 'react'
import { mobileViewAnalyctics } from "../dummyData"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

//Material-UI

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function MobileViewAnalyctics() {
    return (
        <Paper style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Mobile Views
      </Typography>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={mobileViewAnalyctics}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#3bb077"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
    )
}
