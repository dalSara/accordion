import React from "react";
import PropTypes from "prop-types";
import css from "./text.css";

//In a real site this should most likely be a component handeling markdown from a cms

function Text({ text }) {
  return <p className="text">{text}</p>;
}
Text.propTypes = {
  text: PropTypes.string
};
export default Text;
