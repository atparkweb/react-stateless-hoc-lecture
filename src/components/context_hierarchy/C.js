import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

/* This component uses the render props pattern to 
 * consume and use the color value from the ThemeContext
 * */

class C extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {coloredTheme =>
          <div style={{color: coloredTheme}}>
            This is C
          </div>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default C;