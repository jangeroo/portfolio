import { useEffect } from "react";
import styled from "styled-components";

import "./css-reset.css";
import "./GlobalStyles.css";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    document.title = "Michael Jang's portfolio";
  }, []);

  return (
    <AppWrapper className="App">
      <Header>
        <h1>Welcome To Michael Jang's Portfolio!</h1>
      </Header>
      <AboutMe />
      <Projects />
      <Contact />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  /* text-align: center; */
  color: var(--color-text);
`;

const Header = styled.header`
  position: sticky;
  top: 0px;
  padding: 25px;
  padding-bottom: 10px;
  background-color: dimgray;
  color: gainsboro;
  z-index: 1;
`;

export default App;
