import React, { useState } from "react";
import PricingCard from "../ui/PricingCard";
import PricingToggle from "../ui/PricingToggle";

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleToggle = (option: "monthly" | "yearly") => {
    setBillingPeriod(option);
  };

  // Define pricing plans
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "0",
      currency: "₹",
      period: "/month",
      yearlyPrice: "0",
      features: [
        { text: "Access to the selected courses" },
        { text: "Basic Community Support" },
        { text: "Virtual Interviews" },
        { text: "Resume Screening" },
      ],
    },
    {
      title: "Basic Plan",
      price: "200",
      currency: "₹",
      period: "/month",
      yearlyPrice: "2000",
      features: [
        { text: "Access to the selected courses" },
        { text: "Basic Community Support" },
        { text: "Virtual Interviews" },
        { text: "Resume Screening" },
      ],
    },
    {
      title: "Pro Plan",
      price: "400",
      currency: "₹",
      period: "/month",
      yearlyPrice: "4000",
      features: [
        { text: "Access to the selected courses" },
        { text: "Basic Community Support" },
        { text: "Virtual Interviews" },
        { text: "Resume Screening" },
      ],
    },
  ];

  return (
    <section className="bg-[rgba(232,230,244,1)] flex w-full flex-col overflow-hidden items-center pt-[69px] pb-[254px] px-[53px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <h2 className="text-black text-[64px] font-semibold leading-[96px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[66px]">
        Choose the Perfect Plan For Interview Needs
      </h2>

      <div className="mt-[123px] ml-[18px] max-md:mt-10">
        <PricingToggle activeOption={billingPeriod} onToggle={handleToggle} />
      </div>

      <div className="self-stretch mb-[-51px] mt-[54px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <PricingCard
                title={plan.title}
                price={
                  billingPeriod === "monthly" ? plan.price : plan.yearlyPrice
                }
                currency={plan.currency}
                period={billingPeriod === "monthly" ? "/month" : "/year"}
                features={plan.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
