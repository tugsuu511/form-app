import React, { useState } from "react";
import PineconeLogo from "@/app/icons/PineconeLogo";
import Chevron from "@/app/icons/Chevron";
import ChevronLeft from "@/app/icons/ChevronLeft";
import { isStepTwoValidation } from "../utils/stepTwoValidation";
import Eye from "@/app/icons/Eye";
import EyeSlash from "@/app/icons/EyeSlash";

const StepTwo = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepTwoValidation(formValue);
    if (isValid) {
      handleNextStep();
    }
    if (!isValid) {
      handleError(errors);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="w-[480px] h-[755px] p-[32px] bg-[#FFF] flex flex-col justify-between rounded-lg">
        <div>
          <div className="flex flex-col gap-2">
            <PineconeLogo />
            <p className="text-[26px] font-semibold">Join us! 😎</p>
            <p>Please provide all current information accurately.</p>
          </div>
          <div className=" flex flex-col gap-2 mt-[28px]">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 ">
                <p className="text-[14px] font-semibold">Email</p>
                <p className="text-red-500 text-[14px] font-semibold">*</p>
              </div>
              <input
                name="email"
                className="w-full p-[12px] border"
                placeholder="Your email"
                value={formValue.email || ""}
                onChange={handleChange}
                type="email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <p className="text-[14px] font-semibold">Phone Number</p>
                <p className="text-red-500 text-[14px] font-semibold">*</p>
              </div>
              <input
                name="phone"
                className="w-full p-[12px] border"
                placeholder="Your phone number"
                value={formValue.phone || ""}
                onChange={handleChange}
                type="tel"
                pattern="^\+?[1-9]\d{1,14}$"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <p className="text-[14px] font-semibold">Password</p>
                <p className="text-red-500 text-[14px] font-semibold">*</p>
              </div>
              <div className="relative">
                <input
                  name="password"
                  className="w-full p-[12px] border"
                  placeholder="Your password"
                  value={formValue.password || ""}
                  onChange={handleChange}
                  type={passwordVisible ? "text" : "password"}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-[20px] right-[10px] cursor-pointer"
                >
                  {passwordVisible ? <EyeSlash /> : <Eye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <p className="text-[14px] font-semibold">Confirm Password</p>
                <p className="text-red-500 text-[14px] font-semibold">*</p>
              </div>
              <div className="relative">
                <input
                  name="confirmPassword"
                  className="w-full p-[12px] border"
                  placeholder="Confirm your password"
                  value={formValue.confirmPassword || ""}
                  onChange={handleChange}
                  type={confirmPasswordVisible ? "text" : "password"}
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute top-[20px] right-[10px] cursor-pointer"
                >
                  {confirmPasswordVisible ? <EyeSlash /> : <Eye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleBackStep}
            className="border w-[128px] rounded-xl flex items-center justify-center"
          >
            <ChevronLeft />
            Back
          </button>
          <button
            onClick={handleFormNextStep}
            className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-xl p-[10px]"
          >
            Continue 2/3 <Chevron />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
