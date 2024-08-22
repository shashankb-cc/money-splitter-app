interface ResetFieldProps {
  /**
   * This is to pass the label
   */
  label1: string;
  label2: string;
  price: string;
}

export function TipAmountField(props: ResetFieldProps) {
  return (
    <div className="flex justify-between  font-space-mono  sm:text-center sm:mb-5 lg:mb-[64px] max-sm:mb-0">
      <div className="self-start text-[#feffff] text-[20px] leading-[1rem] font-[2rem] max-sm:text-[0.8rem] md:text-[16px] lg:text-[1.2rem]">
        <span>{props.label1}</span>
        <p className="text-[#9fb3b2] font-normal mt-3 text-start">{props.label2}</p>
      </div>

      <div className="text-end text-[#2cc0ad] text-[48px] leading-[4.4rem] font-bold max-sm:text-[2rem] sm:leading-[4rem] md:text-[1.7rem] md:leading-[3.6rem] lg:text-[2.5rem] lg:text-left lg:leading-[2.8rem]">
        $ {props.price}
      </div>
    </div>
  );
}

export default TipAmountField;
