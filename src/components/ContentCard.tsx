import React from "react";
import styled from "styled-components";

import { primaryForeground, secondaryForeground } from "../constants/colors";
import { MOBILE_BREAKPOINT, MOBILE_SIDE_PADDING } from "../constants";
import { Game } from "../types";

const CardWrapper = styled.div`
  box-shadow: 0 0 10px #eee;
  padding: 50px;
  cursor: pointer;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
  /* cllickable */
`;
type ContentCardProps = Game;

const ContentCard = (props: ContentCardProps) => {
  const { name, link, platform, stack } = props;

  return (
    <CardWrapper>
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
