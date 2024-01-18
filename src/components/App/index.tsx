import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";

import Header from "../Header";
import Router from "../../Router";
import ToastContainer from "../Toast/ToastContainer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer />
        <GlobalStyles />
        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
