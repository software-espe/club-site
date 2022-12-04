import Header from '../../src/components/Header';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(<Header />);
    expect(container).toBeTruthy();
  });
});
