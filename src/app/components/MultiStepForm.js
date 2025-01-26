"use client";

import React, { useState } from "react";

import StepOne from "@/app/components/StepOne";
import StepTwo from "@/app/components/StepTwo";
import StepThree from "@/app/components/StepThree";
import FormFinished from "@/app/components/FormFinished";
import { AnimatePresence, motion } from "framer-motion";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });
  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  const clearError = (name) => {
    setFormError((prev) => ({ ...prev, [name]: "" }));
  };
  const Step = [StepOne, StepTwo, StepThree, FormFinished][currentStep];

  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const animationVariants = {
    enter: {opacity:0 , x:100},
    center: {opacity:1 , x:0},
    exit: {opacity:0, x:-100},

  }

  return (
    <AnimatePresence>
      <motion.dev
      key={currentStep}
      initial="enter"
      animate="center"
      exit="exit"
      variants={animationVariants}
      transition={{duration: 0.5}}
      >
    <div>
      <Step
        errors={formError}
        formValue={formValue}
        clearError={clearError} 
        handleError={handleError}
        setFormValue={setFormValue}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      />
    </div>
    </motion.dev>
    </AnimatePresence>
    
  );
};

export default MultiStepForm;
