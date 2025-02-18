import React from "react";
import ReactDOM from "react-dom/client";

//JSX => Babel transpiles it to React.createElement() => Reactelement - object => HTML element (render)

const jsxheading = <h1 id="heading">This is namaste react</h1>;
console.log(jsxheading); //React element=> object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
