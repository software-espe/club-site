import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SectionWithLabel from '../../../src/components/atoms/SectionWithLabel';

describe('SectionWithLabel Component', () => {
  it('should render a label', () => {
    render(<SectionWithLabel label="Label" />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <SectionWithLabel label="Label">
        <p>Child</p>
      </SectionWithLabel>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
