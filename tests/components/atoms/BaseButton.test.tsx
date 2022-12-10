import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BaseButton from '../../../src/components/atoms/BaseButton';

describe('BaseButton Component', () => {
  const props = {
    text: 'Click me'
  };

  it('should render a button', () => {
    render(<BaseButton {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    render(<BaseButton {...props} onClick={onClick} />);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a button with text passed as prop', () => {
    render(<BaseButton text="Click me" />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
