import React from "react";
import styled from "styled-components";

import { primaryForeground, secondaryForeground } from "../constants/colors";
import { MOBILE_BREAKPOINT, MOBILE_SIDE_PADDING } from "../constants";

const CardWrapper = styled.div`
  box-shadow: 0 0 10px #eee;
  padding: 50px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
  /* cllickable */
`;

const ContentCard = () => {
  return (
    <CardWrapper>
      {/* game img */}
      Gameimg
      {/* game desc */}
      game desc
    </CardWrapper>
  );
};

export default ContentCard;
