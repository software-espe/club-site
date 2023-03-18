import { formatMaxLength } from '../../src/tools/formatMessage.tools';

describe('formatMaxLength', () => {
  it('should format the message correctly', () => {
    const fieldName = 'username';
    const maxLength = 10;
    const expectedMessage = 'username no puede superar los 10 caracteres.';
    const formattedMessage = formatMaxLength(fieldName, maxLength);
    expect(formattedMessage).toBe(expectedMessage);
  });
});
