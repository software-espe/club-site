export const formatMinLength = (
  fieldName: string,
  minLength: number
): string => {
  return `${fieldName} debe tener al menos ${minLength} caracteres.`;
};

export const formatMaxLength = (
  fieldName: string,
  maxLength: number
): string => {
  return `${fieldName} no puede superar los ${maxLength} caracteres.`;
};
