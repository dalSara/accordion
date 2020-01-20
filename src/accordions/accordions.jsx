import React from "react";
import PropTypes from "prop-types";
import css from "./accordions.css";
import Accordion from "../accordion/accordion";

function Accordions({ facts }) {
  return (
    <div className="accordions">
      <ul className="accordions__list">
        {facts.map((fact, index) => (
          <li className="accordions__item" key={index}>
            <Accordion {...fact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Accordions.propTypes = {
  facts: PropTypes.arrayOf({
    heading: PropTypes.string,
    infoText: PropTypes.string
  })
};

export default Accordions;
