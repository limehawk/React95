import React from 'react';
import styled from 'styled-components';
import { createHatchedBackground } from '../common';

const StyledTrack = styled.div`
  flex: 1;
  position: relative;
  ${({ theme }) =>
    createHatchedBackground({
      mainColor: theme.material,
      secondaryColor: theme.borderLightest,
    })}
`;

type ScrollbarTrackProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  trackRef: React.RefObject<HTMLDivElement | null>;
};

export const ScrollbarTrack = ({ children, onClick, trackRef }: ScrollbarTrackProps) => (
  <StyledTrack ref={trackRef as React.RefObject<HTMLDivElement>} onClick={onClick}>
    {children}
  </StyledTrack>
);
