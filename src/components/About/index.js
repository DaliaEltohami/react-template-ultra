import React from "react";

import {
  CreativeSection,
  CreativeInfo,
  InfoTitle,
  InfoTitleSpan,
  InfoDir,
  InfoDesc,
} from "./style.js";

import Container from "../styles/Container.styled.js";

function About() {
  return (
    <CreativeSection>
      <Container>
        <CreativeInfo>
          <InfoTitle>
            <InfoTitleSpan>This is</InfoTitleSpan> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </Container>
    </CreativeSection>
  );
}
export default About;
