export const isStepTwoValidation = (formValue) => {
  const errors = {};
  let isValid = true;

  if (!formValue.email) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
    errors.email = "Please enter a valid email";
    isValid = false;
  }

  if (!formValue.phone) {
    errors.phone = "Phone number is required";
    isValid = false;
  } else if (!/^\+?[1-9]\d{1,14}$/.test(formValue.phone)) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  }

  if (!formValue.password) {
    errors.password = "Password is required";
    isValid = false;
  } else if (formValue.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
    isValid = false;
  }

  if (formValue.password !== formValue.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
    isValid = false;
  }

  return { isValid, errors };
};
