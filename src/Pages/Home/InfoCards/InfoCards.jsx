import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open at 9 a.m to 5 p.m everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Mirpur-2, Dhaka",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+8801568919237",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mt-8">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
