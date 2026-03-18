import React from 'react';
import { CommonStyledProps } from '../types';
type DigitProps = {
    pixelSize?: number;
    digit?: number | string;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare function Digit({ digit, pixelSize, ...otherProps }: DigitProps): React.JSX.Element;
export { Digit, DigitProps };
//# sourceMappingURL=Digit.d.ts.map