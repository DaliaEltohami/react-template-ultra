import React, { useEffect, useState } from "react";
import {
  PortfolioSection,
  PortfolioList,
  PortfolioTitle,
  PortfolioListItem,
  TitleSpan,
  Overlay,
  OverlaySpan,
  Image,
  ImageWrapper,
} from "./style.js";
import axios from "axios";

function Portfolio() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);
  const imagesDom = images.map((image) => {
    return (
      <ImageWrapper key={image.id}>
        <Image src={image.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioListItem $active>All</PortfolioListItem>
        <PortfolioListItem>HTML</PortfolioListItem>
        <PortfolioListItem>Photoshop</PortfolioListItem>
        <PortfolioListItem>Wordpress</PortfolioListItem>
        <PortfolioListItem>Mobile</PortfolioListItem>
      </PortfolioList>

      <div className="box">{imagesDom}</div>
    </PortfolioSection>
  );
}
export default Portfolio;
