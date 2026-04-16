import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useForkRef from '../common/hooks/useForkRef';

type ToolbarProps = {
  children?: React.ReactNode;
  noPadding?: boolean;
  onOutsideClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

type StyledToolbarProps = {
  $noPadding?: boolean;
};

const StyledToolbar = styled.div<StyledToolbarProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.$noPadding ? '0' : '4px')};
`;

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(
  { children, noPadding = false, onOutsideClick, ...otherProps },
  ref
) {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, toolbarRef);

  useEffect(() => {
    if (!onOutsideClick) {
      return;
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!toolbarRef.current?.contains(e.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [onOutsideClick]);

  return (
    <StyledToolbar $noPadding={noPadding} ref={handleRef} {...otherProps}>
      {children}
    </StyledToolbar>
  );
});

Toolbar.displayName = 'Toolbar';

export { Toolbar };
