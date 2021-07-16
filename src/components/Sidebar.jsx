import React from "react";
import clsx from "clsx";

//Material-UI
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutlineOutlined,
  ReportOutlined,
} from "@material-ui/icons";

export default function Sidebar(props) {
  const { window } = props;

  const drawer = (
    <div>
      <div className={props.classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText>Analyctics</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText>Sales</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PermIdentity />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText>Transactions</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MailOutline />
          </ListItemIcon>
          <ListItemText>Mail</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DynamicFeed />
          </ListItemIcon>
          <ListItemText>Feedback</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChatBubbleOutline />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineOutlined />
          </ListItemIcon>
          <ListItemText>Manage</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText>Analytics</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportOutlined />
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          classes={{ paper: props.classes.drawer }}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden lgUp xsDown implementation="css">
        <Drawer
          variant="permanent"
          className={clsx(props.classes.drawer, {
            [props.classes.drawerOpen]: props.open,
            [props.classes.drawerClose]: !props.open,
          })}
          classes={{
            paper: clsx({
              [props.classes.drawerOpen]: props.open,
              [props.classes.drawerClose]: !props.open,
            }),
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden mdDown implementation="css">
        <Drawer
          className={clsx(props.classes.drawer, {
            [props.classes.drawerOpen]: !props.open,
            [props.classes.drawerClose]: props.open,
          })}
          classes={{
            paper: clsx({
              [props.classes.drawerOpen]: !props.open,
              [props.classes.drawerClose]: props.open,
            }),
          }}
          variant="permanent"
          open={props.open}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
}
