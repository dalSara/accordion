import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Collapse } from "react-collapse";
import css from "./accordion.css";
import Text from "../text/text.jsx";

function Accordion({ heading, infoText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div aria-hidden={!isExpanded} className="accordion">
      <button
        className={cn("accordion__button", {
          "accordion__button--active": isExpanded
        })}
        onClick={handleOnClick}
      >
        <h2 className="accordion__heading">{heading}</h2>
        <span
          className={cn("accordion__plus-sign", {
            "accordion__plus-sign--active": isExpanded
          })}
        >
          +
        </span>
      </button>
      <Collapse isOpened={isExpanded}>
        <Text className="accordion__text" text={infoText}></Text>
      </Collapse>
    </div>
  );
}

Accordion.propTypes = {
  heading: PropTypes.string,
  infoText: PropTypes.string
};

export default Accordion;
