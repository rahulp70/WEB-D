import React from "react";
import ReactDom from "react-dom";

const currentStyle = {
  color: ""
};

const date = new Date();
const currentTime = date.getHours();

var message;
if (currentTime < 12) {
  message = "GOOD MORING";
  currentStyle.color = "red";
} else if (currentTime < 18 && currentTime > 12) {
  message = "GOOD AFTERNOON";
  currentStyle.color = "green";
} else {
  message = "GOOD NIGHT";
  currentStyle.color = "blue";
}

ReactDom.render(
  <h1 style="currentStyle" style={currentStyle}>
    {" "}
    {message}{" "}
  </h1>,
  document.getElementById("root")
);
