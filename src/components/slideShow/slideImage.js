import React, { useState, useEffect} from 'react';
import styled, { keyframes, css } from 'styled-components';

const forwardAnimation = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const backwardAnimation = keyframes`
    0% { opacity: 100% }
    100% { opacity: 0% }
`;

const StyledImageContainer = styled.div`
  width: 85%;
  height: 85%;
  border: 2px solid ${(props) => props.theme.colors.backgroundPrimary};
  border-radius: 10px;
  box-shadow: 10px 30px 90px ${(props) => props.theme.colors.backgroundPrimary};
  ${(props) =>
    props.imageDirection === "forward"
      ? css`
          animation: ${forwardAnimation} 1.5s ease;
        `
      : css`
          animation: ${backwardAnimation} 1.5s ease;
        `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default function SlideImage({ src, imageDirection }) {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    setCurrentImage(src);
  }, [src]);

  return (
    <>
      {currentImage === src && (
        <StyledImageContainer imageDirection={imageDirection}>
          <StyledImage src={src} />
        </StyledImageContainer>
      )}
    </>
  );
}
