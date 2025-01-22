import React from "react";
import PineconeLogo from "@/app/icons/PineconeLogo";
import { isStepOneValid } from "../utils/StepOneValidation";
import Input from "@/app/components/Input";

const StepOne = (props) => {
  const {
    handleNextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      handleNextStep();
    }
    handleError(errors);
  };
  return (
    <div className="w-[480px] h-[655px] p-[32px] bg-[#FFF]">
      <div className="flex flex-col gap-2">
        <PineconeLogo />
        <p className="text-[26px] font-semibold">Join us! 😎</p>
        <p>Please provide all current information accurately.</p>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <p className="text-[14px] font-semibold">First name</p>
            <p className="text-red-500 text-[14px] font-semibold">*</p>
          </div>
          <input
            className="w-full p-[12px] border"
            placeholder="Your first name"
            onChange={handleChange}
          ></input>
          {errors.firstName.length > 0 && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
        </div>
        <button onClick={handleFormNextStep}>next</button>
      </div>
    </div>
  );
};

export default StepOne;
