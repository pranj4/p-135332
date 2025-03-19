import React from "react";

interface PricingToggleProps {
  activeOption: "monthly" | "yearly";
  onToggle: (option: "monthly" | "yearly") => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  activeOption,
  onToggle,
}) => {
  return (
    <div className="items-center bg-white flex min-h-[86px] w-[321px] max-w-full text-2xl font-medium whitespace-nowrap px-3 py-[11px] rounded-lg">
      <button
        onClick={() => onToggle("monthly")}
        className={`self-stretch gap-2.5 px-[30px] py-3.5 rounded-md max-md:px-5 ${
          activeOption === "monthly"
            ? "bg-[rgba(73,70,166,1)] text-white"
            : "text-[#4C4C4D]"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle("yearly")}
        className={`self-stretch gap-2.5 px-[30px] py-3.5 rounded-[100px] max-md:px-5 ${
          activeOption === "yearly"
            ? "bg-[rgba(73,70,166,1)] text-white"
            : "text-[#4C4C4D]"
        }`}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingToggle;
