'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledSeparator = styled__default["default"].div`
  ${({ $orientation, theme, $size = "100%" }) => $orientation === "vertical" ? `
    height: ${index.getSize($size)};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    ` : `
    width: ${index.getSize($size)};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;
const Separator = React.forwardRef(({ size = "100%", orientation, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledSeparator, { "$size": size, "$orientation": orientation, ref, ...otherProps });
});
Separator.displayName = "Separator";

exports.Separator = Separator;
