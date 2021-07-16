import React from "react";

//Material-UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

//Components
import InfoCard from "../components/InfoCard";
import Chart from "../components/Chart";
import TopProducts from "../components/TopProducts";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Data
import {
  cardData,
  userData,
  topProducts,
  newJobMembers,
  latestTransactions,
} from "../dummyData";

const renderCards = cardData.map((data, index) => (
  <Grid item xs={12} sm={6} lg={4} key={index}>
    <InfoCard
      title={data.title}
      amount={data.amount}
      difference={data.difference}
    />
  </Grid>
));

const renderTopProducts = topProducts.map((data, index) => (
  <TopProducts product={data.product} company={data.company} key={index} />
));

const renderNewJobMembers = newJobMembers.map((data, index) => (
  <WidgetSm name={data.name} title={data.title} img={data.img} key={index} />
));

const renderTable = latestTransactions.map((data, index) => (
  <WidgetLg
    name={data.name}
    date={data.date}
    amount={data.amount}
    status={data.status}
    img={data.img}
    key={index}
  />
));

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={3}>
          {renderCards}
          <Grid item xs={12}>
            <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Paper style={{ padding: "10px" }}>
          <Typography variant="h6" gutterBottom>
            Top Products
          </Typography>
          <List>{renderTopProducts}</List>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={4}>
        <Paper style={{ padding: "10px" }}>
          <Typography variant="h6" gutterBottom>
            New Job Members
          </Typography>
          <List>{renderNewJobMembers}</List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Paper style={{ padding: "10px" }}>
          <Typography variant="h6" gutterBottom>
            Latest Transactions
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTable}</TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
