'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledThumb = styled__default["default"].div`
  position: absolute;
  ${index.createBoxStyles()}
  ${index.createBorderStyles({ style: "window" })}
  cursor: default;
  touch-action: none;
`;
const ScrollbarThumb = ({ offset, size, axis, onPointerDown, onPointerMove, onPointerUp }) => {
  const isVertical = axis === "vertical";
  return React__default["default"].createElement(StyledThumb, { onPointerDown, onPointerMove, onPointerUp, style: {
    [isVertical ? "top" : "left"]: `${offset}px`,
    [isVertical ? "left" : "top"]: 0,
    [isVertical ? "right" : "bottom"]: 0,
    [isVertical ? "height" : "width"]: `${size}px`
  } });
};

exports.ScrollbarThumb = ScrollbarThumb;
