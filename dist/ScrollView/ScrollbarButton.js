'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const ArrowSvg = ({ rotation }) => React__default["default"].createElement(
  "svg",
  { height: "100%", width: "100%", viewBox: "0 0 26 26", xmlns: "http://www.w3.org/2000/svg", style: { display: "block" } },
  React__default["default"].createElement(
    "g",
    { transform: `rotate(${rotation} 13 13)` },
    React__default["default"].createElement("polygon", { fill: "currentColor", points: "6,10 20,10 13,17" })
  )
);
const rotationMap = { up: 180, down: 0, left: 90, right: 270 };
const StyledButton = styled__default["default"].div`
  ${index.createBoxStyles()}
  ${({ $active }) => $active ? index.createBorderStyles({ style: "window", invert: true }) : index.createBorderStyles({ style: "window" })}
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
const ScrollbarButton = ({ direction, active = false, onPointerDown, onPointerUp, onPointerLeave }) => React__default["default"].createElement(
  StyledButton,
  { "$active": active, onPointerDown, onPointerUp, onPointerLeave },
  React__default["default"].createElement(ArrowSvg, { rotation: rotationMap[direction] })
);

exports.ScrollbarButton = ScrollbarButton;
