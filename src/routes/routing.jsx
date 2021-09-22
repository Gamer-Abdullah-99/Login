import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import Nav from "../components/nav";
import Products from "../screens/products";
import ProductDetail from "../screens/productDetail";
import Login from "../screens/login";

export default function Routing() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/productsDetails/:keys">
          <ProductDetail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
