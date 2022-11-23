import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const SocialLogin = ({ setSignupError }) => {
  const { googleSignIn } = useContext(AuthContext);
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const [token] = useToken(googleUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveUser(user?.displayName, user?.email);
      })
      .catch((err) => setSignupError(err.message));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-omega.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoogleUserEmail(email);
      });
  };

  return (
    <button onClick={handleSignIn} className="btn btn-outline w-full">
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default SocialLogin;
