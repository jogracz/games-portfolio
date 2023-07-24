import React from "react";
import styled from "styled-components";

import { primaryForeground } from "./constants/colors";
import {
  MENU_HEIGHT,
  MOBILE_BREAKPOINT,
  MOBILE_SIDE_PADDING,
} from "./constants";

import "./App.css";

const ContentWrapper = styled.div`
  color: ${primaryForeground};
  height: calc(100% - ${MENU_HEIGHT}px);
  padding: 40px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
`;

function App() {
  return (
    <div className="App">
      <ContentWrapper>Hello</ContentWrapper>
    </div>
  );
}

export default App;
