import React from "react";
import styled from "styled-components";

import {
  primaryForeground,
  purple,
  darkDoctorGreen,
  coral,
  orange,
} from "../constants/colors";
import { MENU_HEIGHT } from "../constants";

const HeaderWrapper = styled.div`
  /* size */
  width: 100%;
  height: ${MENU_HEIGHT}px;
  /* flex */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* white space */
  padding: 20px 20px 20px 20px;
  /* text */
  color: ${primaryForeground};
  color: white;
  /* color: ${purple}; */
  font-size: 20px;
  font-weight: bold;
  /* other */
  /* box-shadow: 0 0 10px lightgray; */
  border-bottom: 1px solid #eee;
  background-color: ${darkDoctorGreen};
  background-color: teal;
  /* opacity: 0.5; */
  /* links */
  a {
    color: ${orange};
    &:hover {
      color: ${coral};
    }
    &:active {
      color: ${coral};
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <p>Joanna Graczyk - Games Portfolio</p>
      <a
        href="https://www.linkedin.com/in/joanna-graczyk/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </HeaderWrapper>
  );
};

export default Header;
