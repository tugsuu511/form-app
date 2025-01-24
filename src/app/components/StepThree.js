import React, { useState } from "react";
import PineconeLogo from "@/app/icons/PineconeLogo";
import Chevron from "@/app/icons/Chevron";
import ChevronLeft from "@/app/icons/ChevronLeft";
import { isStepThreeValid } from "../utils/stepThreeValidation";

const StepThree = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const [selectedImg, setSelectedImg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepThreeValid(formValue);
    if (isValid) {
      handleNextStep();
    } else {
      handleError(errors);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUpload = new FileReader();
      fileUpload.onloadend = () => {
        setSelectedImg(fileUpload.result);
        setFormValue((prev) => ({
          ...prev,
          profileImg: file,
        }));
      };
      fileUpload.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[480px] h-[755px] p-[32px] bg-[#FFF] flex flex-col justify-between rounded-lg">
      <div>
        <div className="flex flex-col gap-2">
          <PineconeLogo />
          <p className="text-[26px] font-semibold">Join us! 😎</p>
          <p>Please provide all current information accurately.</p>
        </div>
        <div className="flex flex-col gap-2 mt-[28px]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-[14px] font-semibold">Date of birth</p>
              <p className="text-red-500 text-[14px] font-semibold">*</p>
            </div>
            <input
              name="dateBirth"
              className="w-full p-[12px] border"
              placeholder="yyyy-mm-dd"
              onChange={handleChange}
              type="date"
            />

            {errors.dateBirth && (
              <p className="text-red-500 text-[12px]">{errors.dateBirth}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-[14px] font-semibold">Profile image</p>
              <p className="text-red-500 text-[14px] font-semibold">*</p>
            </div>
            <input
              name="profileImg"
              className="w-full p-[12px] border"
              onChange={handleImageUpload}
              type="file"
            />

            {errors.profileImg && (
              <p className="text-red-500 text-[12px]">{errors.profileImg}</p>
            )}

              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Profile preview"
                  className="mt-2 w-full h-[220px] object-cover"
                />
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
          Submit 3/3 <Chevron />
        </button>
      </div>
    </div>
  );
};

export default StepThree;
