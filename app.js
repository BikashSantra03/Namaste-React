import React from "react";
import ReactDOM from "react-dom/client";

const para = <p id="para">Hi I am Biaksh</p>; // React Element

const Title = () => <p>This is a Title para</p>; // React Component

const number = 3; // normal variable

//Component composition => one component inside another
const HeadingComponent = () => (
  <div className="container">
    <h1 id="heading">Namaste React Functional Component Episode - {number}</h1>

    <h2>{console.log("just loging")}</h2>

    <Title />

    <Title></Title>

    {Title()}

    {para}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
