import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, price, slots } = option;
  return (
    <div className="card w-[350px] lg:w-[425px] shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="font-semibold text-xl text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
