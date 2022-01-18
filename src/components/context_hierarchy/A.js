import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import D from "./D";

class A extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={'green'}>
        <>
        This is A
          <D />
        </>
      </ThemeContext.Provider>
    )
  }
}

export default A;