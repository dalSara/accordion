import React from "react";
import PropTypes from "prop-types";
import "./heading.css";

//In a real site this component would of course have multiple themes for designs.
//And be able to handel different lables for the H tag, so it could be customized for every use.

function Heading({ heading }) {
  return (
    <div className="heading__container">
      <h1 className="heading">{heading}</h1>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string
};

export default Heading;
