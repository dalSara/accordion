import React from "react";
import ReactDOM from "react-dom";

import Button from "./button/button.jsx";
import Heading from "./heading/heading.jsx";
import Accordions from "./accordions/accordions.jsx";
import content from "../mock-data/content.json";

const App = () => {
  return (
    <div className="container">
      <Heading heading={content.heading}></Heading>
      <Accordions facts={content.facts} />
      <Button text={content.button.text} href={content.button.href}></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
