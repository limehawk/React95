import React__default, { forwardRef, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useForkRef from '../common/hooks/useForkRef.mjs';

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.$noPadding ? "0" : "4px"};
`;
const Toolbar = forwardRef(function Toolbar2({ children, noPadding = false, onOutsideClick, ...otherProps }, ref) {
  const toolbarRef = useRef(null);
  const handleRef = useForkRef(ref, toolbarRef);
  useEffect(() => {
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
  return React__default.createElement(StyledToolbar, { "$noPadding": noPadding, ref: handleRef, ...otherProps }, children);
});
Toolbar.displayName = "Toolbar";

export { Toolbar };
