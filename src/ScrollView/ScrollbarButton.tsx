import React from 'react';
import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const ArrowSvg = ({ rotation }: { rotation: number }) => (
  <svg
    height="100%"
    width="100%"
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <g transform={`rotate(${rotation} 13 13)`}>
      <polygon fill="currentColor" points="6,10 20,10 13,17" />
    </g>
  </svg>
);

type ScrollbarButtonProps = {
  direction: 'up' | 'down' | 'left' | 'right';
  active?: boolean;
  onPointerDown: () => void;
  onPointerUp: () => void;
  onPointerLeave: () => void;
};

const rotationMap = { up: 180, down: 0, left: 90, right: 270 };

const StyledButton = styled.div<{ $active?: boolean }>`
  ${createBoxStyles()}
  ${({ $active }) =>
    $active
      ? createBorderStyles({ style: 'window', invert: true })
      : createBorderStyles({ style: 'window' })}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  padding: 0;
  cursor: default;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const ScrollbarButton = ({
  direction,
  active = false,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
}: ScrollbarButtonProps) => (
  <StyledButton
    $active={active}
    onPointerDown={onPointerDown}
    onPointerUp={onPointerUp}
    onPointerLeave={onPointerLeave}
  >
    <ArrowSvg rotation={rotationMap[direction]} />
  </StyledButton>
);
