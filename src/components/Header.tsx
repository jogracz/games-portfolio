import React from "react";
import styled from "styled-components";

import {
  primaryForeground,
  secondaryForeground,
  primaryBackground,
} from "../constants/colors";
import { MENU_HEIGHT } from "../constants";

const HeaderWrapper = styled.div`
  /* size */
  width: 100%;
  height: ${MENU_HEIGHT}px;
  /* flex */
  display: flex;
  align-items: center;
  /* white space */
  padding: 20px 20px 20px 20px;
  /* text */
  color: ${primaryForeground};
  font-size: 30px;
  /* other */
  box-shadow: 0 0 10px #eee;
  background-color: ${primaryBackground};
  /* links */
  a {
    color: ${primaryForeground};
    :hover {
      color: ${secondaryForeground};
    }
    :active {
      color: ${secondaryForeground};
    }
  }
`;

const Header = () => {
  return <HeaderWrapper>Joanna Graczyk - HTML5 Games</HeaderWrapper>;
};

export default Header;
