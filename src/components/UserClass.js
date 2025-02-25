import React from "react";
import { githubUserAPI } from "../utils/constatnt";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Manu", html_url: "", location: "" },
    };

    console.log(" Child Component constructor");
  }

  async componentDidMount() {
    const data = await fetch(githubUserAPI);
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log("Child component Did Mount")
  }
  componentDidUpdate() {
    console.log("Child Component did updated");
  }
  render() {
    const { contact } = this.props;
    const { name, html_url, location } = this.state.userInfo;

    console.log(name + " Child component rendered");
    return (
      <div className="about">
        <h2>{name}</h2>
        <h3>Location: Kolkata, {location}</h3>
        <h3>Mobile: {contact}</h3>
        <h3>
          Github:{" "}
          <a href={html_url} target="_main">
            {html_url}
          </a>
        </h3>
      </div>
    );
  }
}

export default UserClass;

//---------------------------------------------------------------------------------------------------------------------

{
  /* # React Life Cycle phases ==> Using Functional Component
import { useEffect } from "react";

const UserClass = (props) => {
  const { Name, Location, Contact } = props;
  useEffect(() => {
    console.log(Name+"Child component useEffect");
  }, []);

  console.log( Name  + "child component rendered");
  return (
    <div className="about">
      <h2>{Name}</h2>
      <h3>Location: {Location}</h3>
      <h3>{Contact}</h3>
    </div>
  );
};
 export default UserClass; */
}

//----------------------------------------------------------------------------------------------------------------------

{
  /*
  @ React Life Cycle phases

    # Mounting Phase --------->
    --parent  consturctor() called
    -- Parent  render() called

    --First Child constructor() called  (If props given then values initialized a/c to props)
    --First Child render() called with default values of state variables (If state variable used)

    --Second Child constructor() called  (If props given then values initialized a/c to props)
    --Second Child render() called with default values of state variables (If state variable used)


    -- <DOM  updated in a single batch --> as DOM manupulation is expensive>


    --Parent ComponentDidMount()
    -- First Child ComponentDidMount   (API call happens, State variable updated as we used setState in ComponentDidMount())
    -- Secone Child ComponentDidMount    (API call happens, State variable updated as we used setState in ComponentDidMount())

     # Updating Phase --------->
     
     -- Render() is called with API data
     -- HTML is Loaded with new API data

     -- Parent componentDidUpdate() is called
     -- First Child componentDidUpdate() is called
     -- Secone Child componentDidUpdate() is called

LINK : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/
}
