import React from "react";
import PropTypes from "prop-types";
import css from "./text.css";

export class Heading extends React.Component {
  render() {
    return <h2 text="heding" />;
  }
}

Heading.PropTypes = {
  text: PropTypes.string
};
