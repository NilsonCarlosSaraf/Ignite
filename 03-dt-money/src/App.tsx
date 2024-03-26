import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/themes/default";
import { GlobalStyle } from "./src/global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}

