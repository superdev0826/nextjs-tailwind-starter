'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

import Container from 'components/shared/container';
import TrialEmailInput from 'components/shared/trial-email-input';

const features = [
  {
    hightlight: '3x',
    content: 'Faster Analysis Cycles',
    description:
      'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
  },
  {
    hightlight: '10%+',
    content: 'Savings on Costs',
    description:
      'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
  },
  {
    hightlight: '30',
    content: 'Day Setup',
    description:
      'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
  },
];

const poppins = Poppins({
  weight: ['200', '300', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const HomePage = () => {
  const [trialEmail, setTrialEmail] = useState('');

  const handleChangeEmail = (e) => {
    setTrialEmail(e.target.value);
  };

  return (
    <section className="px-safe">
      <Container>
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="absolute top-0 left-0 -translate-y-1/2 w-full lg:w-[630px] aspect-square rounded-full opacity-[0.15] bg-primary-1 blur-[200px]" />
          <div className="w-full lg:w-auto flex flex-col">
            <h1
              className={`max-w-full lg:max-w-[696px] text-gray-98 text-4xl lg:text-[76px] leading-[1.125] [text-shadow:_0_0_20px_rgb(255_255_255_/_20%)] ${poppins.className}`}
            >
              Unlock valuable insights from subscription data
            </h1>
            <p className="max-w-[590px] text-gray-94 text-xl leading-normal font-light mt-[28px]">
              Analyze your subscription ecosystem for cost optimization and risk management
            </p>
            <div className="mt-10 w-full lg:w-[504px]">
              <TrialEmailInput value={trialEmail} onChange={handleChangeEmail} />
            </div>
          </div>
          <Image src="/images/document.png" width={716} height={797} alt="Document Illustration" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-10 xl:justify-start xl:gap-[166px] mt-20">
          {features &&
            features.map((feature, index) => (
              <div
                className="flex flex-col justify-start w-full lg:w-[338px]"
                key={`feature-${index}`}
              >
                <div className="relative">
                  <h5
                    className={`text-[136px] leading-none ${poppins.className} font-extralight bg-highlight-graident bg-clip-text text-transparent`}
                  >
                    {feature.hightlight}
                  </h5>
                  <div className="absolute top-0 left-0 bg-primary-2 opacity-30 blur-[100px] w-[141px] h-[136px]" />
                </div>
                <h6 className="text-gray-98 text-2xl leading=[1.125] mt-[14px]">
                  {feature.content}
                </h6>
                <div className="w-full h-[1px] bg-white opacity-10 my-4 lg:my-8" />
                <p className="text-gray-94 text-lg leading-normal font-light">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
