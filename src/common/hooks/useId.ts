import { useId as reactUseId } from 'react';

export const useId = (id?: string) => {
  const generated = reactUseId();
  return id ?? generated;
};
