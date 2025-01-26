export const validateSignUpData = (email, password) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValidEmail = emailRegex.test(email);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const isValidPassword = passwordRegex.test(password);

  if (!isValidEmail) return "Enter a valid email address";
  if (!isValidPassword) return "Enter a valid password";

  return null;
};
