import Header from '../../src/components/Header';
import { render, screen, cleanup } from '@testing-library/react';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(<Header />);
    expect(container).toBeTruthy();
  });

  it('should render the user name', () => {
    const userName = screen.findByRole('userName');
    expect(userName).toBeTruthy();
  });

  it('should render the user picture', () => {
    const userPicture = screen.findByRole('userPicture');
    expect(userPicture).toBeTruthy();
  });

  it('should render the user status', () => {
    const userStatus = screen.findByRole('userStatus');
    expect(userStatus).toBeTruthy();
  });
});
