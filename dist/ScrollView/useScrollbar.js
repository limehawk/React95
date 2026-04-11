'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const ARROW_SCROLL_AMOUNT = 40;
const MIN_THUMB_SIZE = 30;
function useScrollbar(axis = "vertical") {
  const contentRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [thumbOffset, setThumbOffset] = React.useState(0);
  const [thumbSize, setThumbSize] = React.useState(0);
  const [showScrollbar, setShowScrollbar] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(null);
  const isDraggingRef = React.useRef(false);
  const dragStartPos = React.useRef(0);
  const dragStartScrollPos = React.useRef(0);
  const scrollIntervalRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const isVertical = axis === "vertical";
  const updateThumb = React.useCallback(() => {
    const el = contentRef.current;
    if (!el)
      return;
    const scrollTotal = isVertical ? el.scrollHeight : el.scrollWidth;
    const clientTotal = isVertical ? el.clientHeight : el.clientWidth;
    const scrollPos = isVertical ? el.scrollTop : el.scrollLeft;
    const needsScroll = scrollTotal > clientTotal + 1;
    setShowScrollbar(needsScroll);
    if (!needsScroll || !trackRef.current)
      return;
    const trackTotal = isVertical ? trackRef.current.clientHeight : trackRef.current.clientWidth;
    const ratio = clientTotal / scrollTotal;
    const newThumbSize = Math.max(ratio * trackTotal, MIN_THUMB_SIZE);
    const maxThumbOffset = trackTotal - newThumbSize;
    const scrollRatio = scrollPos / (scrollTotal - clientTotal);
    const newThumbOffset = scrollRatio * maxThumbOffset;
    setThumbSize(newThumbSize);
    setThumbOffset(newThumbOffset);
  }, [isVertical]);
  React.useEffect(() => {
    const el = contentRef.current;
    if (!el)
      return;
    updateThumb();
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [updateThumb]);
  React.useEffect(() => {
    const el = contentRef.current;
    if (!el)
      return;
    const observer = new MutationObserver(updateThumb);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [updateThumb]);
  React.useEffect(() => {
    return () => {
      if (rafRef.current !== null)
        cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const handleScroll = React.useCallback(() => {
    if (rafRef.current !== null)
      return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateThumb();
    });
  }, [updateThumb]);
  const startScrolling = React.useCallback((direction) => {
    setActiveButton(direction);
    const el = contentRef.current;
    if (!el)
      return;
    const doScroll = () => {
      if (isVertical) {
        el.scrollTop += direction === "increment" ? ARROW_SCROLL_AMOUNT : -ARROW_SCROLL_AMOUNT;
      } else {
        el.scrollLeft += direction === "increment" ? ARROW_SCROLL_AMOUNT : -ARROW_SCROLL_AMOUNT;
      }
    };
    doScroll();
    scrollIntervalRef.current = setInterval(doScroll, 100);
  }, [isVertical]);
  const stopScrolling = React.useCallback(() => {
    setActiveButton(null);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);
  const handleThumbPointerDown = React.useCallback((e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = true;
    dragStartPos.current = isVertical ? e.clientY : e.clientX;
    dragStartScrollPos.current = isVertical ? (_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0 : (_d = (_c = contentRef.current) === null || _c === void 0 ? void 0 : _c.scrollLeft) !== null && _d !== void 0 ? _d : 0;
    e.target.setPointerCapture(e.pointerId);
  }, [isVertical]);
  const handleThumbPointerMove = React.useCallback((e) => {
    if (!isDraggingRef.current)
      return;
    e.preventDefault();
    const el = contentRef.current;
    const track = trackRef.current;
    if (!el || !track)
      return;
    const delta = (isVertical ? e.clientY : e.clientX) - dragStartPos.current;
    const trackTotal = isVertical ? track.clientHeight : track.clientWidth;
    const scrollableTotal = (isVertical ? el.scrollHeight : el.scrollWidth) - (isVertical ? el.clientHeight : el.clientWidth);
    const maxThumbTravel = trackTotal - thumbSize;
    if (maxThumbTravel <= 0)
      return;
    const scrollDelta = delta / maxThumbTravel * scrollableTotal;
    if (isVertical) {
      el.scrollTop = dragStartScrollPos.current + scrollDelta;
    } else {
      el.scrollLeft = dragStartScrollPos.current + scrollDelta;
    }
  }, [thumbSize, isVertical]);
  const handleThumbPointerUp = React.useCallback(() => {
    isDraggingRef.current = false;
  }, []);
  const handleTrackClick = React.useCallback((e) => {
    const el = contentRef.current;
    const track = trackRef.current;
    if (!el || !track)
      return;
    const trackRect = track.getBoundingClientRect();
    const clickPos = isVertical ? e.clientY - trackRect.top : e.clientX - trackRect.left;
    if (clickPos < thumbOffset) {
      if (isVertical)
        el.scrollTop -= el.clientHeight;
      else
        el.scrollLeft -= el.clientWidth;
    } else if (clickPos > thumbOffset + thumbSize) {
      if (isVertical)
        el.scrollTop += el.clientHeight;
      else
        el.scrollLeft += el.clientWidth;
    }
  }, [thumbOffset, thumbSize, isVertical]);
  return {
    thumbOffset,
    thumbSize,
    showScrollbar,
    contentRef,
    trackRef,
    handleScroll,
    startScrolling,
    stopScrolling,
    handleThumbPointerDown,
    handleThumbPointerMove,
    handleThumbPointerUp,
    handleTrackClick,
    activeButton
  };
}

exports.useScrollbar = useScrollbar;
