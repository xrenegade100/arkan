/* eslint-disable operator-linebreak */
const validation = {
  EMPTY: 1,
  INVALID: 2,
  VALID: 3,
  EQUAL: 4,
};

const validateEmail = (email: string) => {
  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === '') {
    return validation.EMPTY;
  }

  if (!emailValidRegex.test(email)) {
    return validation.INVALID;
  }

  return validation.VALID;
};

const validatePassword = (password: string) => {
  const passwordValidRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === '') {
    return validation.EMPTY;
  }

  if (!passwordValidRegex.test(password)) {
    return validation.INVALID;
  }

  return validation.VALID;
};

const validateUsername = (username: string) => {
  if (username === '') {
    return validation.EMPTY;
  }

  return validation.VALID;
};

const validateIsPasswordEqualToConfirmPassword = (
  password: string,
  confirmPassword: string,
) => {
  if (confirmPassword === '') {
    return validation.EMPTY;
  }

  if (password !== confirmPassword) {
    return validation.INVALID;
  }

  return validation.VALID;
};

export {
  validation,
  validateEmail,
  validatePassword,
  validateUsername,
  validateIsPasswordEqualToConfirmPassword,
};
