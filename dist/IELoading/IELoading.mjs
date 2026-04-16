import React__default, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: ${({ $width }) => $width}px;
  height: auto;
`;
const IELoading = forwardRef(({ width = 250, ...otherProps }, ref) => {
  return React__default.createElement(StyledImg, { ref, alt: "Loading", "$width": width, ...otherProps });
});
IELoading.displayName = "IELoading";

export { IELoading };
