import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import IconButton from "@material-ui/core/IconButton";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#0c0c0c",
  },
  container2: {
    paddingLeft: "59rem",
    paddingTop: "2rem",
  },
  icon: {
    color: "white",
    transform: "scale(2)",
  },
  social: {
    "& svg": {
      fontSize: "30px",
      color: "white",
    },
  },
  ico: {
    "&:hover": {
      color: "#ffdd7d",
      transition: "transform 250ms",
      transform: "translateY(-5px)",
    },
  },
  title: {
    color: "white",
    paddingLeft: "0.7rem",
    textDecoration: "none",
    fontWeight: "bold",
  },
  ul: {
    paddingLeft: "57.7rem",
    paddingTop: "0.5rem",
  },
  li: {
    display: "inline",
  },
  copyright: {
    fontSize: "23px",
    color: "white",
    paddingLeft: "51rem",
    paddingTop: "1rem",
  },
  contact: {
    fontSize: "23px",
    color: "white",
    paddingLeft: "58rem",
    paddingTop: "0.7rem",
    textDecoration: "none",
    "&:hover": {
      color: "#ffdd7d",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.container2}>
          <Toolbar>
            <FitnessCenterIcon className={classes.icon} />
            <Typography variant="h4">
              <Link to="/" className={classes.title}>
                Gymania
              </Link>
            </Typography>
          </Toolbar>
        </div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a href="https://www.facebook.com" target="_blank">
              <IconButton className={classes.social}>
                <Facebook className={classes.ico} />
              </IconButton>
            </a>
          </li>
          <li className={classes.li}>
            <a href="https://www.instagram.com" target="_blank">
              <IconButton className={classes.social}>
                <Instagram className={classes.ico} />
              </IconButton>
            </a>
          </li>
          <li className={classes.li}>
            <a href="https://www.gmail.com" target="_blank">
              <IconButton className={classes.social}>
                <Mail className={classes.ico} />
              </IconButton>
            </a>
          </li>
          <li className={classes.li}>
            <a href="https://www.twitter.com" target="_blank">
              <IconButton className={classes.social}>
                <Twitter className={classes.ico} />
              </IconButton>
            </a>
          </li>
          <li className={classes.li}>
            <a href="https://www.youtube.com" target="_blank">
              <IconButton className={classes.social}>
                <YouTube className={classes.ico} />
              </IconButton>
            </a>
          </li>
        </ul>
        <br />
        <div>
          <a className={classes.contact} href="mailto: mohdwaleed456@gmail.com">
            Email: waleed@gmail.com
          </a>
        </div>
        <br />
        <div>
          <a className={classes.contact} href="tel:+923312345678">
            Contact: +92-331-2345678
          </a>
        </div>
        <br />
        <div>
          <a className={classes.contact} href="">
            Location: View on G Maps
          </a>
        </div>
        <div className={classes.copyright}>
          {" "}
          Copyright &copy; 2021 Gymania | All Rights Reserved
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Footer;
