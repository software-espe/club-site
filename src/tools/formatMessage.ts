export const formatMaxLength = (
  fieldName: string,
  maxLength: number
): string => {
  return `${fieldName} no puede superar los ${maxLength} caracteres.`;
};
