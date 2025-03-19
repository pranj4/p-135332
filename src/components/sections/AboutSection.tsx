import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center font-normal justify-center px-20 py-[191px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-38px] w-full max-w-[1546px] flex-col items-stretch ml-3.5 max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-[rgba(40,44,64,1)] text-8xl self-center max-md:text-[40px]">
          About Us
        </h2>
        <p className="text-[#505050] text-center text-[32px] leading-[59px] tracking-[3.84px] mt-[66px] max-md:max-w-full max-md:mt-10">
          Easyhustler is an innovative interview preparation platform designed
          to make learning engaging and effective. We offer gamified learning,
          customizable tests, coding challenges, and a supportive community to
          help job seekers excel. Our AI-powered tools and company-specific
          questions ensure a personalized experience. With rewards, referrals,
          and real-time practice, we make interview prep smarter and more
          enjoyable. Join us and level up your career with confidence!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
