import React from "react";
import styled from "styled-components";

import {
  primaryForeground,
  secondaryForeground,
  purple,
  lightDoctorGreen,
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
  /* color: ${purple}; */
  font-size: 20px;
  font-weight: bold;
  /* other */
  /* box-shadow: 0 0 10px lightgray; */
  border-bottom: 1px solid #eee;
  background-color: ${lightDoctorGreen};
  /* opacity: 0.5; */
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
  return <HeaderWrapper>Joanna Graczyk - Games Portfolio</HeaderWrapper>;
};

export default Header;
