import React, { useEffect, useRef, useState } from 'react';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from 'react-icons/md';
import styled, { keyframes, css } from 'styled-components';
import { dataSlide } from './slideData';
import SlideImage from './slideImage';

const forwardArrowAnimation = keyframes`
    0% { transform: translateX(300px) }
    100% { transform: translateX(0px) }
`;

const backwardArrowAnimation = keyframes`
    0% { transform: translateX(-300px) }
    100% { transform: translateX(0px) }
`;

const CarouselContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  font-size: 50px;
  display: flex;
  justify-content: evenly;
  align-items: center;
  color: ${(props) => props.theme.colors.backgroundPrimary};
  background: ${(props) => props.theme.colors.text};
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 10px 30px 90px;
  cursor: pointer;

  ${(props) =>
    props.arrowDir === "forward"
      ? css`
          animation: ${forwardArrowAnimation} 1.5s ease;
        `
      : css`
          animation: ${backwardArrowAnimation} 1.5s ease;
        `}

  :hover {
    border: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
  }
`;

const StyledIndicatorContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledIndicator = styled.div`
  width: 40px;
  height: 10px;
  border: 2px solid ${(props) => props.theme.colors.backgroundPrimary};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.indColor};
  box-shadow: 10px 30px 90px;
  cursor: pointer;
`;

export default function SlideShow() {
  const [indexImage, setIndexImage] = useState(0);
  const [arrowDirection, setArrowDirection] = useState("forward");
  const timeoutRef = useRef(null);

  const nextImage = () => {
    setIndexImage((prevIndex) => prevIndex === dataSlide.length - 1 ? 0 : prevIndex + 1);
    setArrowDirection("forward");
  };

  const prevImage = () => {
    setIndexImage(indexImage - 1);
    setArrowDirection("backward");
  };

  const chooseImage = (index) => {
    setIndexImage(index);
  }

  const resetTimeout = () => {
      if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
      }
  }

  useEffect(()=> {
    resetTimeout();
    timeoutRef.current = setTimeout(()=> {
        nextImage();
    }, 6000);

    return () => {
        resetTimeout();
    }
  }, [indexImage]);

  return (
    <>
      <CarouselContainer>
        {indexImage !== 0 && (
          <StyledArrowContainer onClick={prevImage} arrowDir='backward'>
            <MdKeyboardArrowLeft />
          </StyledArrowContainer>
        )}
        <SlideImage
          src={dataSlide[indexImage]}
          imageDirection={arrowDirection}
        />
        {indexImage !== dataSlide.length - 1 && (
          <StyledArrowContainer onClick={nextImage} arrowDir='forward'>
            <MdKeyboardArrowRight />
          </StyledArrowContainer>
        )}
      </CarouselContainer>
      <StyledIndicatorContainer>
        {dataSlide.map((img, index) => (
          <StyledIndicator
            onClick={() => chooseImage(index)}
            key={img}
            indColor={index === indexImage ? "#2f3542" : ""}
          />
        ))}
      </StyledIndicatorContainer>
    </>
  );
}
