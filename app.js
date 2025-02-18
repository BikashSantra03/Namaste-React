import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "This is the h1")
    ),

    React.createElement(
      "div",
      { id: "child" },
      React.createElement("p", {}, "This is para sibling of h1")
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
