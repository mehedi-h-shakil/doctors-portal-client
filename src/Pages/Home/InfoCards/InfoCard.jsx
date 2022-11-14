import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div
      className={`card card-side shadow-xl px-6 py-12 text-white ${bgClass}`}
    >
      <div className="flex">
        <figure>
          <img src={icon} className="w-16" alt="Icon" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
