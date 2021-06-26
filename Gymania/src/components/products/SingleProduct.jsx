import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "85px",
  },
  img: {
    width: "350px",
    height: "350px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  name: {
    textAlign: "center",
    fontSize: "28px",
  },
  price: {
    textAlign: "center",
    fontSize: "25px",
  },
  addcart: {
    marginLeft: "280px",
    backgroundColor: "#ffdd7d",
    "&:hover": {
      backgroundColor: "rgb(228 177 31)",
    },
  },
  edit: {
    marginLeft: "270px",
  },
}));

const SingleProduct = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  const classes = useStyles();

  const { product, onDelete, history } = props;
  console.log(props);
  React.useEffect(() => {
    if (!cookies.cart) {
      setCookie("cart", JSON.stringify([]));
    }
  });
  const addProducttoCart = (product) => {
    console.log(product);
    let newCart = [...cookies.cart];
    newCart.push(product);
    setCookie("cart", JSON.stringify(product));
  };
  return (
    <Grid className={classes.grid} item xs={4}>
      <img className={classes.img} src={product.imageURL} />
      <h2 className={classes.name}>{product.name}</h2>
      <br />
      <h2 className={classes.price}>Rs {product.price}</h2>
      <br />
      <br />
      {userService.isLoggedIn() && (
        <>
          <Button
            className={classes.addcart}
            variant="contained"
            onClick={(e) => {
              addProducttoCart(product);
            }}
          >
            Add To Cart
          </Button>{" "}
        </>
      )}
      <br /> <br />
      {userService.isAdmin() && (
        <>
          <Button
            className={classes.edit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              history.push("/products/update/" + product._id);
            }}
          >
            Edit
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              productService
                .deleteProduct(product._id)
                .then((data) => {
                  console.log(data);
                  onDelete();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete
          </Button>
        </>
      )}
    </Grid>
  );
};

export default withRouter(SingleProduct);
