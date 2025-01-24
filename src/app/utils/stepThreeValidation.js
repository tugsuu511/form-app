export  const isStepThreeValid = (formData) => {
    let errors = {};
    let isValid = true;

    if (!formData.dateBirth) {
      errors.dateBirth = "Date of birth is required";
      isValid = false;
    }

    const file = formData.profileImg;

    if (!file) {
      errors.profileImg = "Profile image is required";
      isValid = false;
    } else {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        errors.profileImg = "Only JPG and PNG images are allowed";
        isValid = false;
      }

      if (file.size > 5 * 1024 * 1024) {
        errors.profileImg = "File size should not exceed 5MB";
        isValid = false;
      }
    }

    return { isValid, errors };
  };
