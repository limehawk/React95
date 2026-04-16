import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { insetShadow } from '../common/index.mjs';
import { useScrollbar } from './useScrollbar.mjs';
import { ScrollbarButton } from './ScrollbarButton.mjs';
import { ScrollbarThumb } from './ScrollbarThumb.mjs';
import { ScrollbarTrack } from './ScrollbarTrack.mjs';

const StyledScrollView = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};
    pointer-events: none;
    ${(props) => props.$shadow && `box-shadow:${insetShadow};`}
  }
`;
const ScrollViewOuter = styled(StyledScrollView)`
  display: flex;
  overflow: hidden;
`;
const Content = styled.div`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ScrollbarColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 26px;
  flex-shrink: 0;
  z-index: 1;
`;
const ScrollView = forwardRef(({ children, shadow = true, style, ...otherProps }, ref) => {
  const scrollbar = useScrollbar("vertical");
  return React__default.createElement(
    ScrollViewOuter,
    { ref, "$shadow": shadow, style, ...otherProps },
    React__default.createElement(Content, { ref: scrollbar.contentRef, onScroll: scrollbar.handleScroll }, children),
    scrollbar.showScrollbar && React__default.createElement(
      ScrollbarColumn,
      null,
      React__default.createElement(ScrollbarButton, { direction: "up", active: scrollbar.activeButton === "decrement", onPointerDown: () => scrollbar.startScrolling("decrement"), onPointerUp: scrollbar.stopScrolling, onPointerLeave: scrollbar.stopScrolling }),
      React__default.createElement(
        ScrollbarTrack,
        { trackRef: scrollbar.trackRef, onClick: scrollbar.handleTrackClick },
        React__default.createElement(ScrollbarThumb, { offset: scrollbar.thumbOffset, size: scrollbar.thumbSize, axis: "vertical", onPointerDown: scrollbar.handleThumbPointerDown, onPointerMove: scrollbar.handleThumbPointerMove, onPointerUp: scrollbar.handleThumbPointerUp })
      ),
      React__default.createElement(ScrollbarButton, { direction: "down", active: scrollbar.activeButton === "increment", onPointerDown: () => scrollbar.startScrolling("increment"), onPointerUp: scrollbar.stopScrolling, onPointerLeave: scrollbar.stopScrolling })
    )
  );
});
ScrollView.displayName = "ScrollView";

export { ScrollView, StyledScrollView };
