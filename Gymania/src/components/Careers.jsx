import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import { useState } from "react";
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
    position: "absolute",
    top: "27%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  hh: {
    position: "absolute",
    fontSize: "32px",
    color: "#ffdd7d",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
  img: {
    height: "55vh",
    width: "209vh",
  },
  label: {
    color: "white",
    fontSize: "30px",
  },
  input: {
    width: "1000px",
    fontSize: "22px",
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
  },
  response: {
    color: "#ffd400",
    fontSize: "30px",
    textAlign: "center",
  },
}));
const Result = () => {
  const classes = useStyles();
  return (
    <p className={classes.response}>Your message has been sent successfully!</p>
  );
};
const Careers = () => {
  const [result, ShowResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_wphm93j",
        e.target,
        "user_8Oqr3FKbWRDqndN2Yr0x7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    ShowResult(true);
  };
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1544136476-3f7c73174e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Careers</h1>
          <h5 className={classes.hh}>Join us! We’re a company on the move. </h5>
        </div>
      </div>
      <div className={classes.divf}>
        <form className={classes.form} action="" onSubmit={sendEmail}>
          <div>
            <h1 className={classes.h1}>Apply Here!</h1>
            <h5 className={classes.h5}>and we will inform you</h5>
            <br />
            <span className={classes.label}>Full Name</span>
            <br />
            <input
              className={classes.input}
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
            <br />
            <br />
            <span className={classes.label}>Phone Number</span>
            <br />
            <input
              className={classes.input}
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <br />
            <br />
            <span className={classes.label}>Email</span>
            <br />
            <input
              className={classes.input}
              type="text"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <br />
            <br />
            <span className={classes.label}>Job Position</span>
            <br />
            <select className={classes.input} name="position">
              <option value="" selected disabled hidden>
                Select Position
              </option>
              <option value="Customer Care Agent">Customer Care Agent</option>
              <option value="Commercial Sales Representative">
                Commercial Sales Representative
              </option>
              <option value="Sales Account Manager">
                Sales Account Manager
              </option>
            </select>
            <br />
            <br />
            <span className={classes.label}>Qualification</span>
            <br />
            <input
              className={classes.input}
              type="text"
              name="qualification"
              placeholder="Enter your qualifications"
              required
            />
            <br />
            <br />
            <span className={classes.label}>CGPA</span>
            <br />
            <input
              className={classes.input}
              type="text"
              name="cgpa"
              placeholder="Enter your CGPA"
              required
            />
            <br />
            <br />
          </div>
          <div>
            <span className={classes.label}>Job Letter</span>
            <br />
            <textarea
              className={classes.textarea}
              name="jobletter"
              required
              rows="10"
              cols="90"
              placeholder="Why Should we hire you?"
            ></textarea>
            <br />
            <br />
            <br />
            <button className={classes.btn2}>Submit</button>
            <br />s<div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Careers;
