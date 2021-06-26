import React from "react";
import SingleProduct from "./SingleProduct";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    height: "60px",
    width: "180px",
    fontSize: "28px",
    fontWeight: "bold",
    background: "#ffdd7d",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "5%",
    marginBottom: "50px",
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(228 177 31)",
    },
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
  img: {
    height: "55vh",
    width: "209vh",
  },
  noprod: {
    marginTop: "200px",
    marginBottom: "200px",
    textAlign: "center",
    color: "#ffdd7d",
    fontSize: "50px",
  },
  page: {
    paddingLeft: "970px",
    marginTop: "80px",
    paddingBottom: "150px",
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(9);
  const getData = () => {
    productService
      .getProducts(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  console.log(props);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="mobile"
        />
        <div>
          <h1 className={classes.h}>Our Products</h1>
        </div>
      </div>
      {userService.isAdmin() && (
        <Button className={classes.addBtn} onClick={handleNewProductClick}>
          Add New
        </Button>
      )}
      {products.length == 0 ? (
        <h1 className={classes.noprod}>
          Sorry, We are out of Products. Come back later!
        </h1>
      ) : (
        <Grid
          className={classes.gridcontainer}
          container
          spacing={3}
          justify="space-evenly"
        >
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid xs={12}>
        <Pagination
          className={classes.page}
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          size="large"
          color="black"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/products/" + value);
          }}
        />
      </Grid>
    </div>
  );
};

export default Products;
