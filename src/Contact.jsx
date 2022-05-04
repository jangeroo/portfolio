import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactWrapper>
      <h2>How to find me</h2>
      <div>This will be my contact section</div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 25px;
  padding-bottom: 10px;

  background-color: dimgray;
  color: gainsboro;
`;
