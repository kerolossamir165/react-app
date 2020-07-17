import React from "react";
import Popular from "./component/Popular";
import { ThemeProvider } from "./contexts/Theme";
import "./index.css";

class App extends React.Component {
  state = {
    theme: "light",
    ToggleTheme: () => {
      this.setState(
        (prev) => {
          return {
            theme: prev.theme === "light" ? "dark" : "light",
          };
        },
        () => {
          console.log(this.state);
        }
      );
    },
  };
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container ">
            <Popular />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
