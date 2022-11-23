import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { price, treatment, appointmentDate, appointmentTime } = booking;
  return (
    <div>
      <h3 className="text-3xl">Payment</h3>
      <p className="mt-3">
        Please pay <strong>{price}</strong> for your {treatment} appointment on{" "}
        {appointmentDate} at {appointmentTime}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
