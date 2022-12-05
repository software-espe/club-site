import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../../../src/components/molecules/Footer';

describe('Footer', () => {
  beforeEach(() => render(<Footer />));
  afterEach(cleanup);

  it('should render', () => {
    expect(screen.findByRole('footer')).toBeTruthy();
  });
});
