import React from "react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  currency: string;
  period: string;
  features: PricingFeature[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  currency,
  period,
  features,
}) => {
  return (
    <div className="bg-white border flex w-full flex-col items-stretch mx-auto pt-[59px] pb-[27px] px-[39px] rounded-[35px] border-black border-solid max-md:max-w-full max-md:mt-[21px] max-md:px-5">
      <div className="text-5xl text-black font-medium text-center pt-[21px] pb-[60px] px-[70px] rounded-[35px] border-[rgba(0,0,0,0.5)] border-solid border-4 max-md:text-[40px] max-md:max-w-full max-md:px-5">
        {title}
      </div>
      <div className="text-black text-[64px] font-bold text-center self-center mt-[15px] max-md:text-[40px]">
        <span className="text-[48px]">
          {currency}
          {price}
        </span>
        <span className="font-medium text-[32px] text-[rgba(125,113,113,1)]">
          {period}
        </span>
      </div>
      <div className="text-black text-[28px] font-semibold text-center self-center mt-[59px] max-md:mt-10">
        What's Included
      </div>

      {features.map((feature, index) => (
        <div
          key={index}
          className="flex w-full max-w-full gap-[11px] mt-[38px] ml-[27px] max-md:ml-2.5"
        >
          <div className="flex min-h-8 gap-2.5 mt-1.5 p-1.5 rounded-md">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f30f4cf088f03595f64e3315da88afba5692bf?placeholderIfAbsent=true"
              alt="Check icon"
              className="aspect-[1] object-contain w-5"
            />
          </div>
          <div className="text-black text-[28px] font-normal grow shrink basis-auto">
            {feature.text}
          </div>
        </div>
      ))}

      <button className="self-stretch bg-[rgba(74,70,165,1)] gap-2 text-2xl text-white font-semibold text-center mt-[46px] px-6 py-5 rounded-[18px] max-md:mr-[9px] max-md:mt-10 max-md:px-5">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
