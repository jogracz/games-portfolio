import React from "react";
import styled from "styled-components";

import {
  primaryForeground,
  secondaryForeground,
  primaryBackground,
} from "../constants/colors";
import { MOBILE_BREAKPOINT, MOBILE_SIDE_PADDING } from "../constants";
import { Game } from "../types";

// STYLED COMPONENTS
const CardWrapper = styled.div`
  /* size */
  width: 900px;
  max-width: 100%;
  /* white space */
  padding: 10px;
  margin: 20px;
  /* flex */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* other */
  box-shadow: 0 0 10px #eee;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${primaryBackground};
  /* media queries */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
`;

const Image = styled.img`
  /* size */
  width: 700px;
  max-width: 50%;
  /* flex */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Description = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

type ContentCardProps = Game;

const ContentCard = (props: ContentCardProps) => {
  const { name, link, platform, stack, imgPath } = props;

  return (
    <CardWrapper>
      <Image src={imgPath} />
      <Description>
        <h1>{name}</h1>
        <p>platform: {platform}</p>
        <p>Stack: {stack}</p>
        <p> Link: {link}</p>
      </Description>
    </CardWrapper>
  );
};

export default ContentCard;
