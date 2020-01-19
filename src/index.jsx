import React from "react";
import ReactDOM from "react-dom";

import { Text } from "./text/text.jsx";

const App = () => {
  /*
        Note that the following is neither a "" string, nor regular JS: it is JSX syntax.
        Furthermore, it should be only a single tag with children (if any).
        If you want several tags at the same level (ie siblings), you need to put
        them inside a <div> for example.
        If you remove the <div> and have the <h2> and <Container> one after the
        other, you will get an error.
     */
  return (
    <div>
      <h2>Example of Single-Page Application Components with React</h2>
      
      
      
    </div>
  );
};

/*
    This is where we bind our generated HTML via React to the .html file.
    Changes in the state of the React Components will automatically trigger
    the re-rendering of the HTML.
 */
ReactDOM.render(<App />, document.getElementById("root"));
