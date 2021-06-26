import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import userService from "../../services/UserService";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    paddingTop: "90px",
  },
  divf: {
    display: "block",
    textAlign: "center",
  },
  h: {
    position: "absolute",
    fontSize: "80px",
    color: "white",
    textAlign: "center",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  img: {
    height: "25vh",
    width: "211.4vh",
  },
  h1: {
    fontSize: "60px",
    color: "white",
    textAlign: "center",
  },

  h5: {
    fontSize: "30px",
    color: "#ffdd7d",
    textAlign: "center",
  },
  label: {
    color: "white",
    fontSize: "30px",
    paddingLeft: "5px",
  },
  inp: {
    width: "1000px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginTop: "7px",
  },
  textarea: {
    fontSize: "22px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "7px",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontFamily: "Roboto",
  },

  btn2: {
    height: "50px",
    width: "130px",
    fontSize: "25px",
    fontWeight: "bold",
    background: "#ffdd7d",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "5%",
    marginLeft: "420px",
    "&:hover": {
      backgroundColor: "rgb(228 177 31)",
    },
  },
  input: {
    backgroundColor: "white",
    fontSize: "22px",
    border: "none",
  },
  newuser: {
    color: "white",
    paddingTop: "40px",
    marginLeft: "300px",
  },
  click: {
    color: "#ffdd7d",
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1501471984908-815b996862f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Login</h1>
        </div>
      </div>
      <div className={classes.divf}>
        <form className={classes.form}>
          <div>
            <h1 className={classes.h1}>Enter Your Account</h1>
            <h5 className={classes.h5}>and continue buying products</h5>
            <br />
            <span className={classes.label}>Email</span>
            <br />
            <TextField
              className={classes.inp}
              id="outlined-basic"
              variant="outlined"
              type="email"
              placeholder="Enter your email"
              value={email}
              autoComplete="off"
              InputProps={{
                className: classes.input,
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <span className={classes.label}>Password</span>
            <br />
            <TextField
              className={classes.inp}
              id="outlined-basic"
              variant="outlined"
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              value={password}
              InputProps={{
                className: classes.input,
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <Button
              className={classes.btn2}
              onClick={(e) => {
                userService
                  .login(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Login
            </Button>
            <br />
          </div>
          <h3 className={classes.newuser}>
            Don't have an Account?{" "}
            <Link className={classes.click} to="/register">
              {" "}
              Click Here{" "}
            </Link>{" "}
            to SignUp!
          </h3>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
