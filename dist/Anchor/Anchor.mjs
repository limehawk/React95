import React__default, { memo, forwardRef } from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: ${({ underline }) => underline ? "underline" : "none"};
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;
const Anchor = memo(forwardRef(({ children, underline = true, ...otherProps }, ref) => {
  return React__default.createElement(StyledAnchor, { ref, underline, ...otherProps }, children);
}));
Anchor.displayName = "Anchor";

export { Anchor };
