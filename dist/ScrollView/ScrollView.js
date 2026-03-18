'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var useScrollbar = require('./useScrollbar.js');
var ScrollbarButton = require('./ScrollbarButton.js');
var ScrollbarThumb = require('./ScrollbarThumb.js');
var ScrollbarTrack = require('./ScrollbarTrack.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledScrollView = styled__default["default"].div`
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
    ${(props) => props.shadow && `box-shadow:${index.insetShadow};`}
  }
`;
const ScrollViewOuter = styled__default["default"](StyledScrollView)`
  display: flex;
  overflow: hidden;
`;
const Content = styled__default["default"].div`
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
const ScrollbarColumn = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  width: 26px;
  flex-shrink: 0;
  z-index: 1;
`;
const ScrollView = React.forwardRef(({ children, shadow = true, style, ...otherProps }, ref) => {
  const scrollbar = useScrollbar.useScrollbar("vertical");
  return React__default["default"].createElement(
    ScrollViewOuter,
    { ref, shadow, style, ...otherProps },
    React__default["default"].createElement(Content, { ref: scrollbar.contentRef, onScroll: scrollbar.handleScroll }, children),
    scrollbar.showScrollbar && React__default["default"].createElement(
      ScrollbarColumn,
      null,
      React__default["default"].createElement(ScrollbarButton.ScrollbarButton, { direction: "up", active: scrollbar.activeButton === "decrement", onPointerDown: () => scrollbar.startScrolling("decrement"), onPointerUp: scrollbar.stopScrolling, onPointerLeave: scrollbar.stopScrolling }),
      React__default["default"].createElement(
        ScrollbarTrack.ScrollbarTrack,
        { trackRef: scrollbar.trackRef, onClick: scrollbar.handleTrackClick },
        React__default["default"].createElement(ScrollbarThumb.ScrollbarThumb, { offset: scrollbar.thumbOffset, size: scrollbar.thumbSize, axis: "vertical", onPointerDown: scrollbar.handleThumbPointerDown, onPointerMove: scrollbar.handleThumbPointerMove, onPointerUp: scrollbar.handleThumbPointerUp })
      ),
      React__default["default"].createElement(ScrollbarButton.ScrollbarButton, { direction: "down", active: scrollbar.activeButton === "increment", onPointerDown: () => scrollbar.startScrolling("increment"), onPointerUp: scrollbar.stopScrolling, onPointerLeave: scrollbar.stopScrolling })
    )
  );
});
ScrollView.displayName = "ScrollView";

exports.ScrollView = ScrollView;
exports.StyledScrollView = StyledScrollView;
