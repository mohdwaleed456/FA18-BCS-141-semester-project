import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import "./../../src/App.css";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#dedede",
  },
  hh: {
    position: "absolute",
    fontSize: "60px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    left: "25%",
    top: "195%",
    transform: "translate(-50%, -50%)",
  },
  h: {
    position: "absolute",
    fontSize: "80px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    left: "25%",
    top: "205%",
    transform: "translate(-50%, -50%)",
  },
  img: {
    height: "70vh",
    width: "208vh",
    opacity: "0.9",
  },
  img2: {
    height: "70vh",
    width: "209vh",
    opacity: "0.9",
  },

  btn1: {
    height: "60px",
    width: "180px",
    fontSize: "30px",
    fontWeight: "bold",
    background: "#ffa319",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "5%",
    marginBottom: "50px",
    position: "absolute",
    top: "215%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffdd7d",
    },
  },
  equip: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "25px",
    paddingTop: "60px",
    marginBottom: "-50px",
  },
  div1: {
    paddingLeft: "135px",
    float: "left",
    width: "20%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  div2: {
    paddingLeft: "30px",
    float: "left",
    width: "15%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  div3: {
    paddingLeft: "30px",
    float: "left",
    width: "15%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  div4: {
    paddingLeft: "30px",
    float: "left",
    width: "15%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  div5: {
    paddingLeft: "30px",
    float: "left",
    width: "15%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  div6: {
    paddingLeft: "30px",
    float: "left",
    width: "20%",
    height: "600px",
    backgroundColor: "#dedede",
  },
  cardContainer: {
    backgroundColor: "white",
    marginTop: "120px",
    width: "250px",
    boxShadow: "-5px -5px 15px -5px",
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
    fontSize: "25px",
    fontFamily: "Roboto",
  },
  span: {
    color: "#ffdd7d",
  },
  video1: {
    float: "left",
    width: "50%",
    height: "550px",
    backgroundColor: "#dedede",
    border: "0.1px solid black",
    marginTop: "66px",
  },
  video2: {
    float: "right",
    width: "50%",
    height: "550px",
    backgroundColor: "#dedede",
    border: "0.1px solid black",
    marginTop: "66px",
  },
  shop: {},
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Carousel infiniteLoop autoPlay>
        <div class="image">
          <img
            src="https://images.unsplash.com/photo-1588528402605-1f9d0eb7a6d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
            alt="mobile"
          />
          <div class="text-on-image">
            <h1> Bring Fitness Home </h1>
            <h5 style={{ color: "#ffdd7d" }}>
              {" "}
              Pakistan's First Complete Online Fitness Store{" "}
            </h5>
          </div>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80s"
            alt="mobile"
          />
          <div class="text-on-image">
            <h1> Turn 'Fat' into 'Fit' </h1>
            <h5 style={{ color: "#ffdd7d" }}>
              {" "}
              Its going to be a journey. It’s not a sprint to get in shape
            </h5>
          </div>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1609576827249-4c756d27081d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="mobile"
          />
          <div class="text-on-image">
            <h1> Dare To Be Great</h1>
            <h5 style={{ color: "#ffdd7d" }}>Believe you can and you will </h5>
          </div>
        </div>
      </Carousel>
      <div className={classes.video1}>
        <iframe
          width="1055"
          height="548"
          src="https://www.youtube.com/embed/eWJ6lQdxGdI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.video2}>
        <iframe
          width="1055"
          height="548"
          src="https://www.youtube.com/embed/sz28qB1qjAg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className={classes.shop}>
        <img
          className={classes.img2}
          src="https://images.unsplash.com/photo-1612090295965-e506249ccecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
          alt="mobile"
        />
        <div>
          <h2 className={classes.hh}>Step Up Your</h2>
          <h1 className={classes.h}>
            <span className={classes.span}>FITNESS</span> WITH US
          </h1>
          <button
            className={classes.btn1}
            onClick={(e) => {
              props.history.push("/products");
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className={classes.equip}>
        <h1>Equipments</h1>
      </div>
      <div className={classes.div1}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/ecomm/media/catalog/tmp/category/equipment-cardio-cybex.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Cardio</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.div2}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/media/cat.thumb/strength.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Strength</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.div3}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/media/cat.thumb/group-training.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Group Training</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.div4}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/media/cat.thumb/vibration.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Vibration Training</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.div5}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/media/cat.thumb/equipment-flooring.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Flooring</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.div6}>
        <div className={classes.cardContainer}>
          <div>
            <img
              className={classes.cardImage}
              src="https://smhttp-ssl-18062.nexcesscdn.net/media/cat.thumb/accessories_1.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <h2 className={classes.h2c}>Accessories</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
