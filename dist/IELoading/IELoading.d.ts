import React from 'react';
import { CommonStyledProps } from '../types';
type IELoadingProps = {
    src?: string;
    width?: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width'> & CommonStyledProps;
declare const IELoading: React.ForwardRefExoticComponent<{
    src?: string | undefined;
    width?: number | undefined;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width"> & CommonStyledProps & React.RefAttributes<HTMLImageElement>>;
export { IELoading, IELoadingProps };
//# sourceMappingURL=IELoading.d.ts.map