import TipAmountField from "../TipAmountContainer/TipAmountField";

interface ResetDivProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
}

export function BillInfoAndReset({
  tipAmount,
  totalAmount,
  onReset,
}: ResetDivProps) {
  return (
    <div className="bg-[#00474b] text-[#feffff] rounded-[16px] p-[56px] w-full flex flex-col sm:p-[45px] max-sm:p-5 md:w-[90%] md:p-[35px] md:mt-[40px] lg:m-[10px] lg:mt-[50px] lg:p-[41px]">
      <TipAmountField label1="Tip Amount" label2="/ person" price={tipAmount} />
      <TipAmountField label1="Total" label2="/ person" price={totalAmount} />
      <div
        className="flex justify-center items-center bg-[#25c2ad] text-[#00474b] rounded-[7px] text-[24px] font-bold line-height-[3.8rem] letter-spacing-[10%] mt-[131px] cursor-pointer hover:bg-[#e4eaea] sm:text-[20px] max-sm:line-height-[3.5rem] max-sm:w-[100%]  md:text-[20px] md:line-height-[3.2rem] lg:text-[2rem] lg:line-height-[2.8rem] lg:mt-[131px] lg:p-3 "
        onClick={onReset}
      >
        <label>RESET</label>
      </div>
    </div>
  );
}

export default BillInfoAndReset;
