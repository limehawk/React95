'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTrack = styled__default["default"].div`
  flex: 1;
  position: relative;
  ${({ theme }) => index.createHatchedBackground({
  mainColor: theme.material,
  secondaryColor: theme.borderLightest
})}
`;
const ScrollbarTrack = ({ children, onClick, trackRef }) => React__default["default"].createElement(StyledTrack, { ref: trackRef, onClick }, children);

exports.ScrollbarTrack = ScrollbarTrack;
