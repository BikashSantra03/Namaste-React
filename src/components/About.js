import UserClass from "./UserClass";
import { Component } from "react";

//Class Based component
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent component Constructor");
  }

  componentDidMount() {
    console.log("Parent component did Mounted");
  }

  render() {
    console.log("Parent component rendered");

    return (
      <div className="aboutpage">
        <h2>About Namaste React Series</h2>
        <UserClass
          Name={"Bikash Santra"}
          Location="Kolkata-711409"
          Contact="+916289951539"
        />
        <UserClass
          Name={"Manu Santra"}
          Location="Kolkata-711409"
          Contact="+919475835755"
        />
      </div>
    );
  }
}

export default About;
