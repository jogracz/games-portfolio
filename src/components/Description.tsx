import React from "react";
import styled from "styled-components";

import { darkDoctorGreen } from "../constants/colors";
import { MOBILE_BREAKPOINT } from "../constants";

const DescriptionWrapper = styled.div`
  /* size */
  width: 40%;
  min-height: 100%;
  /* white space */
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  /* other */
  p {
    margin: 5px 0 5px 0;
  }
  /* media queries */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const DesktopHeader = styled.h2`
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

type DescriptionProps = {
  id: number;
  title: string;
  category: string;
  platform: string;
  stack: string;
  isLink: boolean;
};

const Description = (props: DescriptionProps) => {
  const { title, category, isLink, platform, stack } = props;

  return (
    <DescriptionWrapper>
      <div>
        <DesktopHeader>{title}</DesktopHeader>
        <p>
          <b>Category:</b> {category}
        </p>
        <p>
          <b>Platform:</b> {platform}
        </p>
        <p>
          <b>Stack:</b> {stack}
        </p>
      </div>
      {isLink && <p style={{ color: darkDoctorGreen }}>Play the game!</p>}
    </DescriptionWrapper>
  );
};

export default Description;
