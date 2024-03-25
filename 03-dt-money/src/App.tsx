import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/themes/default";
import { GlobalStyle } from "./src/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

