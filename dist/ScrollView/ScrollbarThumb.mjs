import React__default from 'react';
import styled from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common/index.mjs';

const StyledThumb = styled.div`
  position: absolute;
  ${createBoxStyles()}
  ${createBorderStyles({ style: "window" })}
  cursor: default;
  touch-action: none;
`;
const ScrollbarThumb = ({ offset, size, axis, onPointerDown, onPointerMove, onPointerUp }) => {
  const isVertical = axis === "vertical";
  return React__default.createElement(StyledThumb, { onPointerDown, onPointerMove, onPointerUp, style: {
    [isVertical ? "top" : "left"]: `${offset}px`,
    [isVertical ? "left" : "top"]: 0,
    [isVertical ? "right" : "bottom"]: 0,
    [isVertical ? "height" : "width"]: `${size}px`
  } });
};

export { ScrollbarThumb };
