import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Footer from '../../../src/components/organisms/Footer';

describe('Footer', () => {
  beforeEach(() => render(<Footer />));
  afterEach(cleanup);

  it('should render', () => {
    expect(screen.findByRole('footer')).toBeTruthy();
  });
});
