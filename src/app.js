import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import CartPage from "./components/CartPage";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

{
  /* - Modular Bundling
     - Code Splitting
     - Lazy Loading
*/
}

// Lazy Loading ==> On Demand Loading

const Grocery = lazy(() => import("./components/Grocery")); // Page is loaded after going to that page.

const AppLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="grocery"
          element={
            <Suspense fallback={<Shimmer />}>
              <Grocery />{" "}
            </Suspense>
          }
        />
        <Route path="cart" element={<CartPage />} />
        <Route path="restaurants/:resid" element={<RestaurantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
