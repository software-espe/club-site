const get = <T>(object: T, property: keyof T): string => {
  if (object[property] && typeof object[property] === 'string') {
    return object[property] as string;
  }
  return '';
};

// ts-prune-ignore-next
export default get;
