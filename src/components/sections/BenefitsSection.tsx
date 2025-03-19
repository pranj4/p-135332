import React from "react";
import BenefitCard from "../ui/BenefitCard";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      number: "01",
      title: "Flexible Learning Schedule",
      description:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      number: "02",
      title: "Expert Instruction",
      description:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      number: "03",
      title: "Diverse Course Offerings",
      description:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      number: "04",
      title: "Updated Curriculum",
      description:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      number: "05",
      title: "Customized Tests",
      description:
        "Practice company-specific and role-based interview questions tailored to user needs.",
    },
    {
      number: "06",
      title: "Interactive Learning Environment",
      description:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center pt-[94px] pb-[180px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full max-w-[1597px] flex-col items-stretch -mb-9 max-md:max-w-full max-md:mb-2.5">
        <div className="w-full max-md:max-w-full">
          <div className="relative flex w-full items-start text-8xl text-[rgba(40,44,64,1)] font-normal whitespace-nowrap max-md:max-w-full max-md:text-[40px]">
            <div className="z-0 flex min-w-60 w-[419px] shrink-0 h-36" />
            <h2 className="absolute z-0 w-[419px] h-36 right-[589px] bottom-0 max-md:text-[40px]">
              Benefits
            </h2>
          </div>
          <div className="w-full mt-[60px] max-md:max-w-full">
            <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
              {benefits.slice(0, 3).map((benefit, index) => (
                <BenefitCard
                  key={index}
                  number={benefit.number}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            <div className="flex w-full gap-5 flex-wrap mt-5 max-md:max-w-full">
              {benefits.slice(3, 6).map((benefit, index) => (
                <BenefitCard
                  key={index + 3}
                  number={benefit.number}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="border bg-[#FCFCFD] min-h-[88px] gap-2 text-4xl text-neutral-800 font-medium text-center mt-[67px] px-6 py-[17px] rounded-lg border-solid border-[#F2F2F2] max-md:mr-[3px] max-md:mt-10 max-md:px-5">
          View All
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
