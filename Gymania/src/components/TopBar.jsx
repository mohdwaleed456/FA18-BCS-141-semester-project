import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
const useStyles = makeStyles((theme) => ({
  transparency: {
    background: "transparent",
    boxShadow: "none",
    position: "absolute",
  },

  link: {
    color: "white",
    paddingRight: "2rem",
    paddingTop: "0.3rem",
    textDecoration: "none",
    fontSize: "30px",
    "&:hover": {
      color: "grey",
    },
  },
  linkhome: {
    color: "white",
    paddingRight: "2rem",
    textDecoration: "none",
    marginLeft: "260px",
    fontSize: "30px",
    "&:hover": {
      color: "grey",
    },
  },
  loginlink: {
    backgroundColor: "#3682f4",
    color: "white",
    padding: "4px 13px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    marginLeft: "260px",
    "&:hover": {
      backgroundColor: "#3d53bf",
    },
  },
  reglink: {
    backgroundColor: "#ff5050",
    color: "white",
    padding: "4px 13px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    marginLeft: "35px",
    "&:hover": {
      backgroundColor: "#bb1414",
    },
  },
  title: {
    color: "white",
    paddingLeft: "1rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "45px",
  },
  icon: {
    transform: "scale(2)",
    marginLeft: "200px",
    fontSize: "30px",
    marginTop: "12px",
  },
  logoutbtn: {
    marginLeft: "300px",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.transparency}>
      <Toolbar>
        <FitnessCenterIcon className={classes.icon} />
        <Typography variant="h4">
          <Link to="/" className={classes.title}>
            Gymania
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/" className={classes.linkhome}>
            Home
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/aboutus" className={classes.link}>
            About Us
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/contactus" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/careers" className={classes.link}>
            Careers
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h5">
              <Link to="/login" className={classes.loginlink}>
                Login
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link to="/register" className={classes.reglink}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <Button
              className={classes.logoutbtn}
              variant="contained"
              color="primary"
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              LogOut {userService.getLoggedInUser().name}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
