import React from "react";
import ServiceInfoCard from "./ServiceInfoCard";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";

const ServicesInfo = () => {
  const cardData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatment is a procedure where concentrated fluoride is applied on the teeth in the form of a gel or varnish.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "A cavity filling is when the dentist fills the opening in your tooth with some kind of material. ",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth whitening is a common procedure performed by dentists. It involves bleaching the tooth surface to reveal a lighter shade.",
      icon: whitening,
    },
  ];
  return (
    <div className="mt-32">
      <p className="text-primary text-center text-xl">Our Services</p>
      <h2 className="text-center text-4xl">Services we provide</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {cardData.map((card) => (
          <ServiceInfoCard key={card.id} card={card}></ServiceInfoCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesInfo;
