import React from "react";
import PineconeLogo from "@/app/icons/PineconeLogo";
import Chevron from "@/app/icons/Chevron";
import { isStepOneValid } from "../utils/stepOneValidation";
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
    <div className="w-[480px] h-[655px] p-[32px] bg-[#FFF] flex flex-col justify-between rounded-lg">
      <div>
        <div className="flex flex-col gap-2">
          <PineconeLogo />
          <p className="text-[26px] font-semibold">Join us! 😎</p>
          <p>Please provide all current information accurately.</p>
        </div>
        <div className=" flex flex-col gap-3 mt-[28px]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-[14px] font-semibold">First name</p>
              <p className="text-red-500 text-[14px] font-semibold">*</p>
            </div>
            <input
              name={"firstName"}
              className={`${
                errors.firstName.length > 0 ? "" : ""
              },"w-full p-[12px] border"`}
              placeholder="Your first name"
              onChange={handleChange}
            ></input>
            {errors.firstName.length > 0 && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-[14px] font-semibold">Last name</p>
              <p className="text-red-500 text-[14px] font-semibold">*</p>
            </div>
            <input
              name={"lastName"}
              className={`${
                errors.lastName.length > 0 ? "" : ""
              },"w-full p-[12px] border"`}
              placeholder="Your last name"
              onChange={handleChange}
            ></input>
            {errors.lastName.length > 0 && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-[14px] font-semibold">User name</p>
              <p className="text-red-500 text-[14px] font-semibold">*</p>
            </div>
            <input
              name={"userName"}
              className={`${
                errors.userName.length > 0 ? "" : ""
              },"w-full p-[12px] border"`}
              placeholder="Your user name"
              onChange={handleChange}
            ></input>
            {errors.userName.length > 0 && (
              <p className="text-red-500">{errors.userName}</p>
            )}
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center gap-3 bg-black text-white rounded-xl p-[10px]" onClick={handleFormNextStep}>
        Continue 1/3 <Chevron />
      </button>
    </div>
  );
};

export default StepOne;
