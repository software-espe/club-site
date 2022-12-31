const userNameDecorator = (username: string | null): string => {
  if (!username) {
    return 'Anonymous';
  }
  const names = username
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  switch (names.length) {
    case 1:
      return names[0];
    case 2:
      return `${names[0]} ${names[1]}`;
    default:
      return `${names[0]} ${names[2]}`;
  }
};

export default userNameDecorator;
