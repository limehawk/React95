import React from 'react';
import { CommonStyledProps } from '../types';
type HandleProps = {
    size?: string | number;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const Handle: React.ForwardRefExoticComponent<{
    size?: string | number | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { Handle, HandleProps };
//# sourceMappingURL=Handle.d.ts.map