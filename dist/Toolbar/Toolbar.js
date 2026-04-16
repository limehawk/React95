'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var useForkRef = require('../common/hooks/useForkRef.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledToolbar = styled__default["default"].div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.$noPadding ? "0" : "4px"};
`;
const Toolbar = React.forwardRef(function Toolbar2({ children, noPadding = false, onOutsideClick, ...otherProps }, ref) {
  const toolbarRef = React.useRef(null);
  const handleRef = useForkRef(ref, toolbarRef);
  React.useEffect(() => {
    if (!onOutsideClick) {
      return;
    }
    const handleOutsideClick = (e) => {
      var _a;
      if (!((_a = toolbarRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
        onOutsideClick();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onOutsideClick]);
  return React__default["default"].createElement(StyledToolbar, { "$noPadding": noPadding, ref: handleRef, ...otherProps }, children);
});
Toolbar.displayName = "Toolbar";

exports.Toolbar = Toolbar;
