import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Henry",
      place: "California",
      image: people1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Henry",
      place: "California",
      image: people1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Henry",
      place: "California",
      image: people1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold">Testimonial</p>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid gap-14 sm:grid-cols-1 lg:grid-cols-3 mt-20">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
