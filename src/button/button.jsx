import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const onClick = () => {
  //a click funtion!
};

function Button({ href, isLoading, text }) {
  return href ? (
    <a className="button" href={href}>
      {text}
    </a>
  ) : (
    <button className="button" onClick={onClick}>
      {isLoading ? (
        <Spinner theme="very-fancy" as="span" animation="spin" />
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default Button;
