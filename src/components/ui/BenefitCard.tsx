import React from "react";

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="bg-[rgba(232,229,247,1)] flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] p-[50px] rounded-xl max-md:max-w-full max-md:px-5">
      <div className="text-[rgba(73,70,166,1)] text-[80px] font-bold leading-[0.3] text-right max-md:text-[40px]">
        {number}
      </div>
      <div className="w-full text-2xl mt-[50px] max-md:mt-10">
        <h3 className="text-[#333] font-semibold tracking-[-0.14px]">
          {title}
        </h3>
        <p className="text-[#4C4C4D] font-normal leading-9 mt-3.5">
          {description}
        </p>
      </div>
      <div className="justify-center items-center border border-[color:var(--White-95,#F1F1F3)] bg-[#FCFCFD] flex w-[74px] gap-2 h-[74px] mt-[50px] px-5 rounded-lg border-solid max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c716d869c486274476e8593a3acd5b4f409c8d4?placeholderIfAbsent=true"
          alt="Arrow icon"
          className="aspect-[1] object-contain w-[34px] self-stretch my-auto"
        />
      </div>
    </article>
  );
};

export default BenefitCard;
