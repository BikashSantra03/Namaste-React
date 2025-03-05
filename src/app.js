import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import CartPage from "./components/pages/CartPage";
import RestaurantMenu from "./components/cards/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

{
  /* - Modular Bundling
     - Code Splitting
     - Lazy Loading
*/
}

// Lazy Loading ==> On Demand Loading

const Grocery = lazy(() => import("./components/pages/Grocery")); // Page is loaded after going to that page.

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Make a API call and receive user name and password
    const data = {
      name: "Bikash Santra",
    };

    setUserName(data.name);
  }, []);

  const userValue = {
    userName,
    setUserName,
  };

  return (
    // Context value for whole app
    <UserContext.Provider value={userValue}>
      <div className="">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </UserContext.Provider>
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
