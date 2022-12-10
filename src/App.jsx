import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import {
  Nav,
  Home,
  Works,
  Services,
  OurTeam,
  Contact,
  Footer,
} from "./components";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Nav />
      <Home />
      <Works />
      <Services />
      <OurTeam />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
