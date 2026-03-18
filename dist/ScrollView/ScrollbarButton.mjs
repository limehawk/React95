import React__default from 'react';
import styled from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common/index.mjs';

const ArrowSvg = ({ rotation }) => React__default.createElement(
  "svg",
  { height: "100%", width: "100%", viewBox: "0 0 26 26", xmlns: "http://www.w3.org/2000/svg", style: { display: "block" } },
  React__default.createElement(
    "g",
    { transform: `rotate(${rotation} 13 13)` },
    React__default.createElement("polygon", { fill: "currentColor", points: "6,10 20,10 13,17" })
  )
);
const rotationMap = { up: 180, down: 0, left: 90, right: 270 };
const StyledButton = styled.div`
  ${createBoxStyles()}
  ${({ $active }) => $active ? createBorderStyles({ style: "window", invert: true }) : createBorderStyles({ style: "window" })}
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
const ScrollbarButton = ({ direction, active = false, onPointerDown, onPointerUp, onPointerLeave }) => React__default.createElement(
  StyledButton,
  { "$active": active, onPointerDown, onPointerUp, onPointerLeave },
  React__default.createElement(ArrowSvg, { rotation: rotationMap[direction] })
);

export { ScrollbarButton };
