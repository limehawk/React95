import React from 'react';
type ScrollbarButtonProps = {
    direction: 'up' | 'down' | 'left' | 'right';
    active?: boolean;
    onPointerDown: () => void;
    onPointerUp: () => void;
    onPointerLeave: () => void;
};
export declare const ScrollbarButton: ({ direction, active, onPointerDown, onPointerUp, onPointerLeave, }: ScrollbarButtonProps) => React.JSX.Element;
export {};
//# sourceMappingURL=ScrollbarButton.d.ts.map