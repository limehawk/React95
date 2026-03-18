import React from 'react';
import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledThumb = styled.div`
  position: absolute;
  ${createBoxStyles()}
  ${createBorderStyles({ style: 'window' })}
  cursor: default;
  touch-action: none;
`;

type ScrollbarThumbProps = {
  offset: number;
  size: number;
  axis: 'vertical' | 'horizontal';
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: () => void;
};

export const ScrollbarThumb = ({
  offset,
  size,
  axis,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: ScrollbarThumbProps) => {
  const isVertical = axis === 'vertical';
  return (
    <StyledThumb
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        [isVertical ? 'top' : 'left']: `${offset}px`,
        [isVertical ? 'left' : 'top']: 0,
        [isVertical ? 'right' : 'bottom']: 0,
        [isVertical ? 'height' : 'width']: `${size}px`,
      }}
    />
  );
};
