import React__default, { memo, forwardRef } from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  display: table-header-group;
`;
const TableHead = memo(forwardRef(function TableHead2({ children, ...otherProps }, ref) {
  return React__default.createElement(StyledTableHead, { ref, ...otherProps }, children);
}));
TableHead.displayName = "TableHead";

export { TableHead };
