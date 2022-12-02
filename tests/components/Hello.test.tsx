import Hello from '../../src/components/Hello';
import { render } from '@testing-library/react';

describe('Hello', () => {
  it('should render', () => {
    const { container } = render(<Hello />);
    expect(container).toBeTruthy();
  });
});
