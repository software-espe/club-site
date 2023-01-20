import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GoBackButton from '../../../src/components/atoms/GoBackButton';

describe('GoBackButton Component', () => {
  it('should render a button', () => {
    render(<GoBackButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be invisible if isHome prop is true', () => {
    render(<GoBackButton isHome />);
    expect(screen.getByRole('button')).toHaveClass('invisible');
  });
});
