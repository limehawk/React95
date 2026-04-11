/// <reference types="react" />
export type ScrollAxis = 'vertical' | 'horizontal';
export interface UseScrollbarResult {
    thumbOffset: number;
    thumbSize: number;
    showScrollbar: boolean;
    contentRef: React.RefObject<HTMLDivElement | null>;
    trackRef: React.RefObject<HTMLDivElement | null>;
    handleScroll: () => void;
    startScrolling: (direction: 'decrement' | 'increment') => void;
    stopScrolling: () => void;
    handleThumbPointerDown: (e: React.PointerEvent) => void;
    handleThumbPointerMove: (e: React.PointerEvent) => void;
    handleThumbPointerUp: () => void;
    handleTrackClick: (e: React.MouseEvent) => void;
    activeButton: 'decrement' | 'increment' | null;
}
export declare function useScrollbar(axis?: ScrollAxis): UseScrollbarResult;
//# sourceMappingURL=useScrollbar.d.ts.map