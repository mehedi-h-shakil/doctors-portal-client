import React from "react";

const ServiceInfoCard = ({ card }) => {
  const { name, icon, description } = card;
  return (
    <div className="card w-[350px] lg:w-[440px] shadow-xl mx-auto">
      <figure>
        <img src={icon} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
