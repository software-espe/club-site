export const isFileImage = (file: File): boolean => {
  return file.name.split('.').pop() !== 'pdf';
};

export const isFileUrl = (file: File | string): file is string => {
  return typeof file === 'string';
};
