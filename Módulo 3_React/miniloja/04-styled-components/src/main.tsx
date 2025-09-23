import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useTheme } from "./hooks/useTheme";
import { light, dark } from "./theme";

function Root() {
  const { theme } = useTheme(); // usa localStorage igualmente
  const selected = theme === "dark" ? dark : light;
  return (
    <ThemeProvider theme={selected}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

