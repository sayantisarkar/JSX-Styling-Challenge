//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();
let heading;
const customStyle = {
  color: ""
};

if ((hours >= 0) & (hours <= 12)) {
  customStyle.color = "red";
  heading = "Good Morning";
} else if ((hours >= 12) & (hours <= 18)) {
  customStyle.color = "green";
  heading = "Good afternoon";
} else {
  customStyle.color = "blue";
  heading = "Good Night";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {heading}
  </h1>,
  document.getElementById("root")
);
