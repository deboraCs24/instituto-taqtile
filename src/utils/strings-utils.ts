export const isValidEmail = (email: string) => {
  const atSymbolIndex = email.indexOf('@');
  const dotIndex = email.indexOf('.', atSymbolIndex);

  return atSymbolIndex > 0 && dotIndex > atSymbolIndex + 1 && dotIndex < email.length - 1;
};

export const isValidPassword = (password: string) => {
  const hasMinimumLength = password.length >= 8;
  const containsLetter = password.split('').some((character) => isNaN(Number(character)));
  const containsNumber = password.split('').some((character) => !isNaN(Number(character)));

  return hasMinimumLength && containsLetter && containsNumber;
};
