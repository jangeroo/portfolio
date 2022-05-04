import React from "react";
import styled from "styled-components";

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  width: 75%;
  margin: 50px auto;
  padding: 25px;
  background-color: gainsboro;
  color: #404040;
`;

const Title = styled.h2`
  width: fit-content;
  margin-left: -50px;
  margin-top: -50px;
  padding: 5px 10px 0px;

  background: darkgray;
`;

const Content = styled.p`
  padding: 15px;
`;
