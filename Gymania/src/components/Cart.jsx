import React from "react";
import { useCookies } from "react-cookie";

const Cart = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  const [myCartProducts, setmyCartProducts] = React.useState([]);
  React.useEffect(() => {
    if (cookies.cart) {
      setmyCartProducts(cookies.cart);
    }
  }, [cookies]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {myCartProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
