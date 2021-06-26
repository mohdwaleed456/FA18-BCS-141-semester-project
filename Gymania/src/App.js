import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from 'react-cookie';
document.body.style = 'background: black';
function App() {
  return (
    <Router>
      <CookiesProvider>
        <div>
          <ToastContainer />
          <TopBar />
          <div >
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/aboutus" exact component={AboutUs} />
              <Route path="/careers" exact component={Careers} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/contactus" exact component={ContactUs} />
              <Route path="/products/new" component={NewProduct} />
              <Route path="/products/update/:id" component={UpdateProduct} />
              <Route path="/products/:page?" component={Products} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <Footer />
        </div>
      </CookiesProvider>
    </Router>
  );
}

export default App;
