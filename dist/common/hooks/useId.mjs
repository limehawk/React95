import { useId as useId$1 } from 'react';

const useId = (id) => {
  const generated = useId$1();
  return id !== null && id !== void 0 ? id : generated;
};

export { useId };
