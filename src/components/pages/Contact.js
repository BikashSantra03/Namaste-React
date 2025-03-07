import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1>Contact</h1>

      <input type="text" className=" m-4 p-4 border border-black" />
      <input type="text" className=" m-4 p-4 border border-black" />
      <button className="border border-black rounded-md m-3 p-3 bg-amber-200">
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Contact;
