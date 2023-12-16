import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";
import Header from "../Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Index";
import EditContact from "../../pages/EditContact";
import NewContact from "../../pages/NewContact";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/new" element={<NewContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
