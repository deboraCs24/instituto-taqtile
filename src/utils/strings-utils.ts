export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  const hasMinimumLength = password.length >= 8;
  const containsLetter = password.split('').some((character) => isNaN(Number(character)));
  const containsNumber = password.split('').some((character) => !isNaN(Number(character)));

  return hasMinimumLength && containsLetter && containsNumber;
};
