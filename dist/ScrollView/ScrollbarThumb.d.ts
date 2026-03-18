import React from 'react';
type ScrollbarThumbProps = {
    offset: number;
    size: number;
    axis: 'vertical' | 'horizontal';
    onPointerDown: (e: React.PointerEvent) => void;
    onPointerMove: (e: React.PointerEvent) => void;
    onPointerUp: () => void;
};
export declare const ScrollbarThumb: ({ offset, size, axis, onPointerDown, onPointerMove, onPointerUp, }: ScrollbarThumbProps) => React.JSX.Element;
export {};
//# sourceMappingURL=ScrollbarThumb.d.ts.map