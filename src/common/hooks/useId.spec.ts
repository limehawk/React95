import { renderHook } from '@testing-library/react-hooks';
import { useId } from './useId';

// Mock React.useId at module load time
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useId: jest.fn(() => ':r0:'),
}));

describe(useId, () => {
  it('returns an ID from React.useId when no ID is passed', () => {
    const { result } = renderHook(() => useId());
    expect(result.current).toEqual(':r0:');
  });

  it('returns the passed ID when provided', () => {
    const { result } = renderHook(() => useId('test'));
    expect(result.current).toEqual('test');
  });
});
