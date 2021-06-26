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
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  img: {
    height: "70vh",
    width: "209vh",
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
  btn1: {
    height: "60px",
    width: "180px",
    fontSize: "30px",
    fontWeight: "bold",
    background: "#ffdd7d",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "5%",
    marginBottom: "50px",
    position: "absolute",
    top: "47%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
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
const ContactUs = (props) => {
  const [result, ShowResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_348bcvd",
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
          src="https://thedressing.co/wp-content/uploads/2020/09/contact-banner.jpg"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Our Team Is Here To Help</h1>
          <button
            className={classes.btn1}
            onClick={(e) => {
              window.scrollTo(700, 700);
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className={classes.divf}>
        <form className={classes.form} action="" onSubmit={sendEmail}>
          <div>
            <h1 className={classes.h1}>Leave Us A Message</h1>
            <h5 className={classes.h5}>and we will get back to you</h5>
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
          </div>
          <div>
            <span className={classes.label}>Subject</span>
            <br />
            <textarea
              className={classes.textarea}
              name="message"
              required
              rows="10"
              cols="90"
              placeholder="Enter your message or suggestion"
            ></textarea>
            <br />
            <br />
            <br />
            <button className={classes.btn2}>Submit</button>
            <br />
            <br />
            <br />
            <div className="row">{result ? <Result /> : null}</div>
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

export default ContactUs;
