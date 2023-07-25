import React from "react";
import styled from "styled-components";

import { primaryForeground } from "./constants/colors";
import {
  MENU_HEIGHT,
  MOBILE_BREAKPOINT,
  MOBILE_SIDE_PADDING,
} from "./constants";
import { games } from "./content";

import { Header, ContentCard } from "./components";

import "./App.css";

const ContentWrapper = styled.div`
  /* size */
  height: calc(100% - ${MENU_HEIGHT}px);
  /* white space */
  padding: 40px;
  /* text */
  color: ${primaryForeground};
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* other */
  /* media queries */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
`;
// TODO:
// confetti background
// header in description
// connect links _blank target
// linkedin & email

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        {games.map((game) => (
          <ContentCard {...game} />
        ))}
      </ContentWrapper>
    </>
  );
}

export default App;
