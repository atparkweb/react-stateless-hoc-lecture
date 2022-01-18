import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

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