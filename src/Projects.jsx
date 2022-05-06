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

function Project({ name, href, thumbnail, description }) {
  return (
    <ProjectWrapper>
      <Thumbnail>
        <ThumbnailImage src={thumbnail} alt="" />
        <ThumbnailCaption>
          <a href={href}>{href}</a>
        </ThumbnailCaption>
      </Thumbnail>
      <ProjectLink href={href}>
        <h3>{name}</h3>
      </ProjectLink>
      <ProjectDescription>
        {description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </ProjectDescription>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  margin: 0 auto 25px;
  padding: 20px;
  overflow: auto;

  background-color: #cccccc;
  /* background-color: yellow; */
  p {
    text-justify: inter-word;
    /* background-color: cyan; */
  }
`;

const ProjectLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }

  position: absolute;
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
`;

const Thumbnail = styled.figure`
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
`;

const ThumbnailCaption = styled.figcaption`
  margin: auto;

  a {
    color: inherit;
    font-size: 0.5em;
  }
`;
