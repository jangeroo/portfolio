import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { projects } from "./projects-data";

export default function Projects() {
  return (
    <Section title="Projects">
      <ProjectList>
        {projects.map((project, i) => {
          return <Project key={i} {...project} />;
        })}
      </ProjectList>
    </Section>
  );
}

const ProjectList = styled.div`
  list-style: none;
`;

function Project({ name, href, thumbnail, Description }) {
  return (
    <ProjectWrapper>
      <ProjectLink href={href}>
        <h3>{name}</h3>
      </ProjectLink>
      <ProjectDescription>
        <Thumbnail href={href} thumbnail={thumbnail} />
        <Description />
      </ProjectDescription>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  margin: 0 auto 25px;
  padding: 20px;
  overflow: auto;
  border-radius: 3px;

  background-color: #cccccc;
  /* background-color: yellow; */
  p {
    text-justify: inter-word;
    /* background-color: cyan; */
  }
`;

const ProjectLink = styled.a`
  position: absolute;
  color: inherit;
  text-decoration: none;
  width: 100%;
  /* background-color: orange; */

  &:hover {
    text-decoration: revert;
  }

  h3 {
    width: fit-content;
    margin-left: -30px;
    padding: 5px 10px 0px;
    background-color: darkgray;
    /* background-color: orange; */
  }
`;

const ProjectDescription = styled.div`
  padding-top: 50px;
  p {
    &:not(:first-of-type) {
      margin-top: 15px;
    }
  }
`;

function Thumbnail({ href, thumbnail }) {
  return (
    <ThumbnailWrapper>
      <ThumbnailImage src={thumbnail} alt="" />
      <ThumbnailCaption>
        <a href={href}>{href}</a>
      </ThumbnailCaption>
    </ThumbnailWrapper>
  );
}
const ThumbnailWrapper = styled.figure`
  float: right;
  display: flex;
  flex-direction: column;
  width: 155px;
  margin-left: 25px;
`;

const ThumbnailImage = styled.img`
  /* height: 100px;
  width: 100px; */
  margin: auto;
  border-radius: 3px;
`;

const ThumbnailCaption = styled.figcaption`
  margin: auto;

  a {
    color: inherit;
    font-size: 0.5em;
  }
`;
