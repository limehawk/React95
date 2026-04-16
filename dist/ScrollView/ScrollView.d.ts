import React from 'react';
import { CommonStyledProps } from '../types';
type ScrollViewProps = {
    children?: React.ReactNode;
    shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
export declare const StyledScrollView: import("styled-components").StyledComponent<"div", any, {
    $shadow?: boolean | undefined;
}, never>;
declare const ScrollView: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    shadow?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollView, ScrollViewProps };
//# sourceMappingURL=ScrollView.d.ts.map