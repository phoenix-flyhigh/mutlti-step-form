import Image from "next/image";
import React from "react";

const Step5 = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-4 z-10 px-2 py-12 md:p-0 rounded-xl md:rounded-none">
      <div className="mb-4">
        <Image
          src="/images/icon-thank-you.svg"
          alt="thank-you-image"
          width={100}
          height={100}
        />
      </div>
      <p className="text-2xl text-marine-blue font-bold">Thank you!</p>
      <p className="text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
