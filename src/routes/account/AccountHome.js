import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
export default function AccountHome() {
  const auth = useAuth();
  return (
    <div className="flex flex-col justify-start bg-gray-500 h-screen">
      <h1>
        {" "}
        Temporary Account home, This is where the user will be navigated to when
        they click their user image in the navbar.
      </h1>
      <h1>{JSON.stringify(auth.user)}</h1>
    </div>
  );
}
