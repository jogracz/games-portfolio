import React from "react";
import styled from "styled-components";

import { lightDoctorGreen, orange } from "../constants/colors";
import { MOBILE_BREAKPOINT } from "../constants";
import { about } from "../content";

const AboutWrapper = styled.div`
  /* size */
  width: 60%;
  min-height: 100%;
  /* size */
  width: 900px;
  max-width: 100%;
  /* min-height: 300px; */
  /* white space */
  padding: 30px;
  /* flex */
  /* display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around; */
  /* text */
  font-size: 20px;
  color: ${orange};
  font-weight: 420;
  line-height: 30px;
  /* border */
  border-radius: 8px;
  box-shadow: 0 0 20px ${orange};

  /* other */
  /* background-color: ${lightDoctorGreen}; */

  /* media queries */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    /* margin-top: 10px; */
    font-size: 16px;
    padding: 18px;
    line-height: 24px;
  }
`;

const About = () => {
  return <AboutWrapper>{about}</AboutWrapper>;
};

export default About;
