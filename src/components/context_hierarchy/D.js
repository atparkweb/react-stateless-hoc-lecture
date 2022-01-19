import React from "react";
import C from "./C";

/* This component doesn't need the theme color context, but
 * its child component (C) does. Rather than passing the data
 * through props, we can use context provider in ancestor (A) to
 * implicitly pass the prop through D to C.
 * */

class D extends React.Component {
  render() {
    return (
      <div>
        This is D
        <C />
      </div>
    )
  }
}

export default D;