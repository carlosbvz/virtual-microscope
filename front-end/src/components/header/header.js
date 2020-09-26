import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LeftMenu from "./left-menu";
// import Search from "./search";
import RightMenu from "./right-menu";
import {useAuth} from '../../contexts/auth-context';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const user = useAuth().getUser();

  // NonAuthed Headed
  if (!user) return(<></>);

  // Authed Header
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <LeftMenu />

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Virtual Microscope{" "}
            </Link>
          </Typography>

          {/* <Search /> */}

          <div className={classes.grow} />

          <RightMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
