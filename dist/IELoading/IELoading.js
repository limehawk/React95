'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledImg = styled__default["default"].img`
  width: ${({ $width }) => $width}px;
  height: auto;
`;
const IELoading = React.forwardRef(({ width = 250, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledImg, { ref, alt: "Loading", "$width": width, ...otherProps });
});
IELoading.displayName = "IELoading";

exports.IELoading = IELoading;
