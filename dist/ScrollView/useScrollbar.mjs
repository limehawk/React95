import { useRef, useState, useCallback, useEffect } from 'react';

const ARROW_SCROLL_AMOUNT = 40;
const MIN_THUMB_SIZE = 30;
function useScrollbar(axis = "vertical") {
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const [thumbOffset, setThumbOffset] = useState(0);
  const [thumbSize, setThumbSize] = useState(0);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartPos = useRef(0);
  const dragStartScrollPos = useRef(0);
  const scrollIntervalRef = useRef(null);
  const isVertical = axis === "vertical";
  const updateThumb = useCallback(() => {
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
  useEffect(() => {
    const el = contentRef.current;
    if (!el)
      return;
    updateThumb();
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [updateThumb]);
  useEffect(() => {
    const el = contentRef.current;
    if (!el)
      return;
    const observer = new MutationObserver(updateThumb);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [updateThumb]);
  const handleScroll = useCallback(() => {
    updateThumb();
  }, [updateThumb]);
  const startScrolling = useCallback((direction) => {
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
  const stopScrolling = useCallback(() => {
    setActiveButton(null);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);
  const handleThumbPointerDown = useCallback((e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartPos.current = isVertical ? e.clientY : e.clientX;
    dragStartScrollPos.current = isVertical ? (_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0 : (_d = (_c = contentRef.current) === null || _c === void 0 ? void 0 : _c.scrollLeft) !== null && _d !== void 0 ? _d : 0;
    e.target.setPointerCapture(e.pointerId);
  }, [isVertical]);
  const handleThumbPointerMove = useCallback((e) => {
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
  const handleThumbPointerUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);
  const handleTrackClick = useCallback((e) => {
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
    activeButton,
    isDragging
  };
}

export { useScrollbar };
