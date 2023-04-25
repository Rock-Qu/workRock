//import { Fragment } from "react";
// import Header from "./component/Header";
// import Login from "./pages/Login";
// import Product from "./pages/Product";
// import Footer from "./component/Footer";

import "tailwindcss/tailwind.css";
import ProductState from "./content/ProductState";

import Router from "./router";

export default function App() {
  return (
    // <Fragment>
    //   <Header title='Product'/>
    //   <Login />
    //   <Footer />
    // </Fragment>
    <ProductState><Router /></ProductState>
    
  )
}