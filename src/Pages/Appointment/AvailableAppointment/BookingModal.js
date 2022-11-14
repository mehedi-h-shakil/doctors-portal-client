import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const createdAppointment = new Date();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      appointmentTime: slot,
      phone,
      email,
      createdAppointmentDate: createdAppointment,
    };

    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              name="date"
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select
              name="slot"
              defaultValue="Choose appointment time"
              className="select select-bordered w-full"
            >
              <option>Choose appointment time</option>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
