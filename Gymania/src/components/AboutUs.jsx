import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
  img: {
    height: "55vh",
    width: "209vh",
  },
  h1: {
    fontFamily: "Roboto",
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "25px",
  },
  p: {
    fontSize: "22px",
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  details: {
    width: "70%",
    float: "left",
    padding: "70px",
    backgroundColor: "#dedede",
    marginTop: "-4px",
    height: "76.1rem",
  },
  details2: {
    marginTop: "-4px",
    width: "30%",
    float: "left",
    padding: "20px",
    backgroundColor: "#dedede",
    paddingLeft: "9rem",
    height: "76.1rem",
    marginBottom: "2rem",
  },
  cardContainer: {
    marginTop: "120px",
    width: "300px",
    boxShadow: "0px 0px 15px -5px",
    transition: "0.5s",
    animation: "ease-in",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0px 0px 15px 0px",
    },
  },
  cardImage: {
    height: "25vh",
  },
  cardTitle: {
    marginBottom: "0.5rem",
  },
  cardContent: {
    margin: "1rem",
    marginTop: "0.5rem",
  },
  h2c: {
    margin: "0",
    padding: "0",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "Roboto",
  },
  pc: {
    margin: "0",
    padding: "0",
    textAlign: "center",
    textAlign: "justify",
    fontSize: "21px",
    fontFamily: "Roboto",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "0.5rem",
  },
  button: {
    padding: "1rem",
    backgroundColor: "#ffa319",
    border: "none",
    transition: "0.2s",
    marginBottom: "0.5rem",
    borderRadius: "4px",
    fontSize: "17px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ffdd7d",
      transform: "scale(1.1)",
    },
  },
}));
const AboutUs = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Our Story</h1>
        </div>
      </div>
      <div className={classes.details}>
        <h1 className={classes.h1}>The Company</h1>
        <br />
        <p className={classes.p}>
          Gymania is Pakistan's oldest and largest distributor of fitness
          equipment. We sell best-in-class exercise machines for the home and
          for a wide variety of commercial facilities.
        </p>
        <p className={classes.p}>
          Gymania is a privately owned company headquartered in Karachi. We have
          been in business for 75 years and have 15 showroom locations plus a
          commercial sales force serving customers. We carry over 50 different
          brands of fitness products and pride ourselves on matching the needs
          of each individual client to the best possible product solution.
        </p>
        <br /> <br />
        <br />
        <h1 className={classes.h1}>Why Gymania?</h1>
        <br />
        <h2 className={classes.h2}>Customers</h2>
        <br />
        <p className={classes.p}>
          We are here for our customers - today and for the future. Fitness
          stores come and go, but Gymania has been around 75 years which is a
          pretty good indication we aren't going to go out of business and leave
          you with no service for your equipment.
        </p>
        <br />
        <h2 className={classes.h2}>Service</h2>
        <br />
        <p className={classes.p}>
          Speaking of service, we are the best. Our service staff has the
          largest stock of parts and Gymania delivery trucks are staffed with
          installers who know what they're doing.
        </p>
        <br />
        <h2 className={classes.h2}>Integrity</h2>
        <br />
        <p className={classes.p}>
          Most importantly, Gymania has integrity. No single piece of equipment
          is right for every situation. We help you select from a wide variety
          of manufacturers what is best for you.
        </p>
        <br />
        <br />
        <br />
        <h1 className={classes.h1}>A Brief History</h1>
        <br />
        <p className={classes.p}>
          Founded in 1937, Gymania was originally named Gym Source. The company
          sold a wide variety of sporting goods out of its retail store in
          Karachi. In 1974, the business was purchased by Ali, a fitness
          enthusiast who saw the potential for growth by selling fitness
          equipment to health clubs and other commercial customers. He also
          began geographic expansion, establishing Gymania stores up and down
          the East coast. In 2016, Ali sold the business to UM Holdings Ltd,
          former owner of Fitness Code, a manufacturer of fitness equipment such
          as treadmills, ellipticals and strength products.
        </p>
        <br />
        <br />
        <br />
        <h1 className={classes.h1}>Careers</h1>
        <br />
        <p className={classes.p}>
          Gymania is a great place to work. What we do helps make the world a
          healthier place and makes people feel better about themselves. And ...
          the company is growing which means that there is opportunity for
          advancement. Visit our careers page to see and send us your resume. We
          are always looking for good people and sometimes we create a spot for
          a star player.
        </p>
      </div>
      <div className={classes.details2}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://www.secondnature.com.au/wp-content/uploads/2019/08/Successful-team-presentation--1024x669.jpg"
              alt=""
            />
          </div>
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Join Our Team</h2>
            </div>
            <div className={classes.cardBody}>
              <p className={classes.pc}>
                Visit our careers page to learn more about the vaious openings
                we have here at Gymania and apply for your desired position.
              </p>
            </div>
          </div>
          <div className={classes.btn}>
            <button
              className={classes.button}
              onClick={(e) => {
                props.history.push("/careers");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
