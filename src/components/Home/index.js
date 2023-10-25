import React from "react";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  HomeBtn,
} from "./style";

function Home() {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Dalia Eltohami</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <span>UX Designer</span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
}
export default Home;
