import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h2 className="text-3xl">
        Please <button onClick={handleSignout}>Sign out</button> and log back
        in.
      </h2>
    </div>
  );
};

export default DisplayError;
