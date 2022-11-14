import React from "react";
import treatment from "../../../assets/images/treatment.png";

const SecondBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-[154px]">
      <div className="flex justify-center">
        <img
          className="lg:w-[458px] lg:h-[576px] sm:w-[322px] sm:h-[406px]"
          src={treatment}
          alt=""
        />
      </div>
      <div className="flex items-center">
        <div className="lg:w-[500px] sm:w-[375px]">
          <h1 className="font-bold text-5xl">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-11">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
