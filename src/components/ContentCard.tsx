import React from "react";
import styled from "styled-components";

import {
  primaryForeground,
  secondaryForeground,
  primaryBackground,
  secondaryBackground,
  coral,
  lightDoctorGreen,
  darkDoctorGreen,
  orange,
} from "../constants/colors";
import { MOBILE_BREAKPOINT, MOBILE_SIDE_PADDING } from "../constants";
import { Game } from "../types";

const CardWrapper = styled.a`
  /* size */
  width: 900px;
  max-width: 100%;
  min-height: 300px;
  /* white space */
  padding: 10px;
  margin: 20px;
  /* flex */
  display: flex;
  /* align-items: center; */
  justify-content: left;
  flex-wrap: wrap;
  /* other */

  border: 2px solid ${lightDoctorGreen};
  /* overflow: hidden; */
  border-radius: 8px;
  background-color: ${primaryBackground};
  /* links */
  text-decoration: none;
  color: ${primaryForeground};
  &:hover {
    /* color: ${secondaryForeground}; */
    box-shadow: 0 0 20px ${lightDoctorGreen};
  }
  &:active {
    color: ${coral};
    box-shadow: 0 0 20px ${lightDoctorGreen};
  }

  /* media queries */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    border-radius: 5px;
    /* flex-direction: column; */
    /* padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px; */
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  padding-right: 40px;
  /* flex */
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    /* flex-direction: column; */
    /* padding-left: ${MOBILE_SIDE_PADDING}px; */
    padding-right: 0;
    width: 100%;
  }
`;

const Image = styled.img`
  /* size */
  /* width: 600px; */
  max-width: 100%;
  max-height: 300px;
  /* flex
  display: flex;
  align-items: center;
  justify-content: space-around; */
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-height: 300px;
  }
`;

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
  /* background-color: teal; */
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

// const handleClick = (e: Event) => {
//   console.log();
// };

const MobileHeader = styled.h1`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const DesktopHeader = styled.h1`
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

type ContentCardProps = Game;

const ContentCard = (props: ContentCardProps) => {
  const { title, category, link, platform, stack, imgPath } = props;

  return (
    <CardWrapper href={link} target="_blank">
      <MobileHeader>{title}</MobileHeader>
      <ImageWrapper>
        <Image src={imgPath} />
      </ImageWrapper>
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
        {link && <p style={{ color: darkDoctorGreen }}>Play the game!</p>}
      </DescriptionWrapper>
    </CardWrapper>
  );
};

export default ContentCard;
