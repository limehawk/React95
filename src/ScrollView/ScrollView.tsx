import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { insetShadow } from '../common';
import { CommonStyledProps } from '../types';
import { useScrollbar } from './useScrollbar';
import { ScrollbarButton } from './ScrollbarButton';
import { ScrollbarThumb } from './ScrollbarThumb';
import { ScrollbarTrack } from './ScrollbarTrack';

type ScrollViewProps = {
  children?: React.ReactNode;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

// IMPORTANT: StyledScrollView is used as a base styled-component by
// Checkbox, Radio, TextInput, Select, Monitor, ProgressBar, Table, and Slider.
// It MUST remain a pure border-only styled.div — no flex, no overflow.
export const StyledScrollView = styled.div<Pick<ScrollViewProps, 'shadow'>>`
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
    ${props => props.shadow && `box-shadow:${insetShadow};`}
  }
`;

// ScrollView-specific wrapper — extends StyledScrollView with flex layout
const ScrollViewOuter = styled(StyledScrollView)`
  display: flex;
  overflow: hidden;
`;

const Content = styled.div`
  box-sizing: border-box;
  flex: 1;
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

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, shadow = true, style, ...otherProps }, ref) => {
    const scrollbar = useScrollbar('vertical');

    return (
      <ScrollViewOuter ref={ref} shadow={shadow} style={style} {...otherProps}>
        <Content ref={scrollbar.contentRef as React.RefObject<HTMLDivElement>} onScroll={scrollbar.handleScroll}>
          {children}
        </Content>

        {scrollbar.showScrollbar && (
          <ScrollbarColumn>
            <ScrollbarButton
              direction="up"
              active={scrollbar.activeButton === 'decrement'}
              onPointerDown={() => scrollbar.startScrolling('decrement')}
              onPointerUp={scrollbar.stopScrolling}
              onPointerLeave={scrollbar.stopScrolling}
            />
            <ScrollbarTrack
              trackRef={scrollbar.trackRef}
              onClick={scrollbar.handleTrackClick}
            >
              <ScrollbarThumb
                offset={scrollbar.thumbOffset}
                size={scrollbar.thumbSize}
                axis="vertical"
                onPointerDown={scrollbar.handleThumbPointerDown}
                onPointerMove={scrollbar.handleThumbPointerMove}
                onPointerUp={scrollbar.handleThumbPointerUp}
              />
            </ScrollbarTrack>
            <ScrollbarButton
              direction="down"
              active={scrollbar.activeButton === 'increment'}
              onPointerDown={() => scrollbar.startScrolling('increment')}
              onPointerUp={scrollbar.stopScrolling}
              onPointerLeave={scrollbar.stopScrolling}
            />
          </ScrollbarColumn>
        )}
      </ScrollViewOuter>
    );
  }
);

ScrollView.displayName = 'ScrollView';

export { ScrollView, ScrollViewProps };
