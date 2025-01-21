import React from "react";

function Input() {
  return (
    <div>
      <div className="gap-2">
        <div className="flex">
          <p className="text-[14px] font-semibold">First name</p>
          <p className="text-red-500 text-[14px] font-semibold">*</p>
        </div>
        <input
          className="w-full p-[12px]"
          placeholder="Your first name"
        ></input>
      </div>
    </div>
  );
}
export default Input;
