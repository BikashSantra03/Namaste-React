import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      //   count2: 0,
    };

    console.log(this.props.Name + " Child Component constructor");
  }

  componentDidMount() {
    console.log(this.props.Name + " Child component did Mounted");
  }

  render() {
    const { Name, Location, Contact } = this.props;
    const { count } = this.state;

    console.log(Name + " Child component rendered");
    return (
      <div className="about">
        <h2>{Name}</h2>
        <h3>Location: {Location}</h3>
        <h3>{Contact}</h3>
        <p>{count}</p>

        <button
          className="add-item-button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default UserClass;

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
