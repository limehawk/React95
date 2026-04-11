import * as React from 'react';

function useEventCallback(fn) {
  const ref = React.useRef(fn);
  React.useLayoutEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}

export { useEventCallback as default };
