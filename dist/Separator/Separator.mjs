import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils/index.mjs';

const StyledSeparator = styled.div`
  ${({ $orientation, theme, $size = "100%" }) => $orientation === "vertical" ? `
    height: ${getSize($size)};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    ` : `
    width: ${getSize($size)};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;
const Separator = forwardRef(({ size = "100%", orientation, ...otherProps }, ref) => {
  return React__default.createElement(StyledSeparator, { "$size": size, "$orientation": orientation, ref, ...otherProps });
});
Separator.displayName = "Separator";

export { Separator };
