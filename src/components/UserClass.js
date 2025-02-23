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
  # React Life Cycle phases
    
    --parent  consturctor
    -- Parent  render

    --First Child constructor
    --First Child render

    --Secone Child constructor
    --Secone Child render

    -- <DOM  updated in a single batch --> as DOM manupulation is expensive>


    --Secone Child ComponentDidMount
    --Secone Child ComponentDidMount

*/
}
