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

  componentDidUpdate() {
    console.log("Parent Component did updated");
  }

  render() {
    console.log("Parent component rendered");

    return (
      <div className="text-center">
        <h2>About Namaste React Series</h2>
        <UserClass
          name={"Bikash Santra"}
          location="Kolkata-711409"
          contact="+916289951539"
        />
        <UserClass
          name={"Bikash Santra"}
          location="Kolkata-711409"
          contact="+916289951539"
        />
      </div>
    );
  }
}

export default About;

//---------------------------------------------------------------------------------------------------------------------

{
  /* # React Life Cycle phases ==> Using Functional Component
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    console.log("Parent component useEffect");
  }, []);


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
        Contact="+916289951539"
      />
    
    </div>
  );
};
export default About;

*/
}
