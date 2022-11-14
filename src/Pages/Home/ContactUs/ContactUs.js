import React from "react";
import bg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-52 py-16" style={{ background: `url(${bg})` }}>
      <div className="flex flex-col items-center px-9">
        <p className="font-bold text-primary">Contact Us</p>
        <h2 className="text-4xl text-white">Stay Connected with us</h2>
      </div>
      <form className="mt-10 w-[300px] lg:w-[450px] mx-auto ">
        <input
          className="input w-full"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="input w-full mt-5"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <input
          className="input w-full mt-5 h-32"
          type="textarea"
          name="message"
          placeholder="Your message"
        />
        <div className="flex justify-center">
          <button className="btn btn-primary text-white mt-8" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
