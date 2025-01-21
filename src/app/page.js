import MultiStepForm from "@/app/components/MultiStepForm";
import PineconeLogo from "@/app/icons/PineconeLogo";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[ #F4F4F4]">
      <div className="w-[480px] h-[655px] p-[32px] bg-[#FFF]">
        <div className="gap-2">
          <PineconeLogo />
          <p className="text-[26px] font-semibold">Join us! 😎</p>
          <p>Please provide all current information accurately.</p>
        </div>
        
      </div>
      <MultiStepForm />;
    </div>
  );
}
