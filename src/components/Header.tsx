import React from "react";
import styled from "styled-components";

import { primaryForeground, secondaryForeground } from "../constants/colors";
import { MENU_HEIGHT } from "../constants";

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${MENU_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 10px #eee;
  color: ${primaryForeground};
  font-size: 30px;
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
