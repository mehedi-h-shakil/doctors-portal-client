import React from "react";

const TestimonialCard = ({ review }) => {
  const { name, place, image, comment } = review;
  return (
    <div className="card shadow-lg p-9">
      <div>
        <p>{comment}</p>
      </div>
      <div className="flex mt-12">
        <img
          src={image}
          className="w-20 border-2 border-primary rounded-full"
          alt=""
        />
        <div className="flex flex-col justify-center ml-3">
          <p className="text-xl">{name}</p>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
