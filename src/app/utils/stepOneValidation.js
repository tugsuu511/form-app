export const isStepOneValid = (data) => {
    const { firstName , lastName, userName } = data;
    const errors = {};
    let isValid = true;
    if (firstName.length <= 1) {
      errors.firstName = "First name must be at least 2 characters.";
      isValid = false;
    } 
    if (lastName.length <= 1) {
      errors.lastName = "Last name must be at least 2 characters.";
      isValid = false;
    }
    if (userName.length <= 1) {
      errors.userName = "User name must be at least 2 characters.";
      isValid = false;
    } 
    return { isValid, errors };
  };