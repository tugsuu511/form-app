import PineconeLogo from "@/app/icons/PineconeLogo";

const FormFinished = () => {
  return (
    <div className="flex flex-col gap-2 p-[32px] bg-white rounded-lg">
      <PineconeLogo />
      <p className="text-[26px] font-semibold">You are all set 🔥</p>
      <p>We have received your submission. Thank you!</p>
    </div>
  );
};

export default FormFinished;
