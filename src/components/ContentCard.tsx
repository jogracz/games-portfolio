import React from "react";
import styled from "styled-components";

import { primaryForeground, secondaryForeground } from "../constants/colors";
import { MOBILE_BREAKPOINT, MOBILE_SIDE_PADDING } from "../constants";
import { Game } from "../types";

const CardWrapper = styled.div`
  width: 900px;
  max-width: 100%;
  box-shadow: 0 0 10px #eee;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  /* flex */
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
  /* cllickable */
`;

const Image = styled.img`
  width: 700px;
  /* height: 300px; */
  max-width: 50%;
  /* max-height: 50%; */
`;

type ContentCardProps = Game;

const ContentCard = (props: ContentCardProps) => {
  const { name, link, platform, stack, imgPath } = props;

  return (
    <CardWrapper>
      <Image src={imgPath} />
      {/* game img */}
      Gameimg
      {/* game desc */}
      game desc Name: {name}
      Link: {link}
      Platform: {platform}
      Stack: {stack}
    </CardWrapper>
  );
};

export default ContentCard;
