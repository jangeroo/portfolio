import styled from "styled-components";

import "./css-reset.css";
import "./GlobalStyles.css";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <AppWrapper className="App">
      <Header id="header">
        <h1>Welcome To Michael Jang's Portfolio!</h1>
      </Header>
      <AboutMe />
      <Projects />
      <Contact />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
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
  transition: 0.5s;
`;

export default App;
