import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import Auth from "../auth/Auth";

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

  click: {
    color: "#ffdd7d",
  },
}));
const NewProduct = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1501471984908-815b996862f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Add New Product</h1>
        </div>
      </div>
      <Auth>
        <div className={classes.divf}>
          <form className={classes.form}>
            <div>
              <h1 className={classes.h1}>Enter Product's Details</h1>
              <h5 className={classes.h5}>and put it on sale</h5>
              <br />
              <span className={classes.label}>Image Url</span>
              <br />
              <TextField
                className={classes.inp}
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter the Image URL"
                value={imageURL}
                autoComplete="off"
                InputProps={{
                  className: classes.input,
                }}
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
              <br />
              <br />
              <span className={classes.label}>Name</span>
              <br />
              <TextField
                className={classes.inp}
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter product's name"
                autoComplete="off"
                value={name}
                InputProps={{
                  className: classes.input,
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <br />
              <span className={classes.label}>Price</span>
              <br />
              <TextField
                className={classes.inp}
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter product's price"
                autoComplete="off"
                value={price}
                InputProps={{
                  className: classes.input,
                }}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <br />
              <br />
              <br />
              <Button
                className={classes.btn2}
                onClick={(e) => {
                  productService
                    .addProduct({ name, price, imageURL })
                    .then((data) => {
                      console.log(data);
                      props.history.push("/products");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Add
              </Button>
              <br />
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />s
          <br />
          <br />
        </div>
      </Auth>
    </div>
  );
};

export default NewProduct;
