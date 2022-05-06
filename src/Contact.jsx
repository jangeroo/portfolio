import React from "react";
import styled from "styled-components";

import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";

const accounts = [
  {
    href: "https://github.com/jangeroo/",
    icon: github,
  },
  {
    href: "https://www.linkedin.com/in/michaeljang86/",
    icon: linkedin,
  },
  {
    href: "https://www.facebook.com/majang",
    icon: facebook,
  },
];

export default function Contact() {
  return (
    <ContactWrapper>
      <h2>Let's Build Something Together!</h2>
      <Content>
        <Caption>
          Feel free to shoot reach out if you're looking for a developer, have a
          question, or just want to connect!
          <EmailLink>
            <a href="mailto: michaeljang86@gmail.com">
              <code>michaeljang86@gmail.com</code>
            </a>
          </EmailLink>
        </Caption>
        <SocialMedia>
          {accounts.map((account) => (
            <AccountLink {...account} />
          ))}
        </SocialMedia>
      </Content>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.footer`
  width: 100%;
  padding: 25px;
  padding-bottom: 10px;

  background-color: dimgray;
  color: gainsboro;

  code {
    background-color: revert;
  }

  a {
    color: inherit;
  }
`;

const Content = styled.div`
  display: flex;
  margin: 25px 0;
`;

const Caption = styled.div``;

const EmailLink = styled.div`
  margin-top: 10px;
  margin-left: -3px;
`;

const SocialMedia = styled.div`
  width: 350px;
  margin-left: 50px;
  margin-right: 25px;
  display: flex;
  justify-content: space-between;
`;

function AccountLink({ icon, href }) {
  return (
    <AccountLinkWrapper href={href}>
      <img src={icon} />
    </AccountLinkWrapper>
  );
}

const AccountLinkWrapper = styled.a`
  text-decoration: none;

  &:hove {
    text-decoration: revert;
  }

  img {
    height: 65px;
  }
`;
