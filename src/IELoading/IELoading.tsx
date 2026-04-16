import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';

type IELoadingProps = {
  src?: string;
  width?: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width'> &
  CommonStyledProps;

const StyledImg = styled.img<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  height: auto;
`;

const IELoading = forwardRef<HTMLImageElement, IELoadingProps>(
  ({ width = 250, ...otherProps }, ref) => {
    return (
      <StyledImg
        ref={ref}
        alt='Loading'
        $width={width}
        {...otherProps}
      />
    );
  }
);

IELoading.displayName = 'IELoading';

export { IELoading, IELoadingProps };
