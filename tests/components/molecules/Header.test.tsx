import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/molecules/Header';

describe('Header', () => {
  it('should render userName passed as prop', () => {
    render(<Header userName="Marcos" />);
    expect(screen.getByText('Marcos')).toBeInTheDocument();
  });

  it('should render online status passed as prop', () => {
    render(<Header userName="Marcos" online={true} />);
    expect(screen.getByRole('status')).toHaveClass('bg-green-light');
  });

  it('should render offline status passed as prop', () => {
    render(<Header userName="Marcos" online={false} />);
    expect(screen.getByRole('status')).toHaveClass('bg-gray-light');
  });
});
