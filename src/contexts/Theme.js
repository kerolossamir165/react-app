import React from "react";
let ThemeContext = React.createContext();
let { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext;

export { ThemeProvider, ThemeConsumer };
