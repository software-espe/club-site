import { isFileImage } from '../lib/tools/file.utils';

export const useFile = (file: File | string) => {
  const displayFileOrUrlSrc = (): string => {
    const defaultFilePath = '/images/file_icon.svg';

    if (!file) {
      return defaultFilePath;
    }

    if (typeof file !== 'string') {
      if (!isFileImage(file)) {
        return defaultFilePath;
      }
      return URL.createObjectURL(file);
    }

    return file as string;
  };

  const displayFileOrUrlAlt = () => {
    if (!file) {
      return 'fileIcon';
    }
    if (typeof file !== 'string') {
      return file.name;
    }
    return file as string;
  };

  return { displayFileOrUrlSrc, displayFileOrUrlAlt };
};
