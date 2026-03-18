import React__default from 'react';
import styled from 'styled-components';
import { createHatchedBackground } from '../common/index.mjs';

const StyledTrack = styled.div`
  flex: 1;
  position: relative;
  ${({ theme }) => createHatchedBackground({
  mainColor: theme.material,
  secondaryColor: theme.borderLightest
})}
`;
const ScrollbarTrack = ({ children, onClick, trackRef }) => React__default.createElement(StyledTrack, { ref: trackRef, onClick }, children);

export { ScrollbarTrack };
