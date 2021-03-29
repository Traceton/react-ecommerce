import React from "react";
import { useAuth } from "../../services/useAuth";

export default function Dashboard() {
  const auth = useAuth();
  return (
    <div className="flex justify-around bg-gray-500 h-screen">
      <h1>{JSON.stringify(auth.user)}</h1>
      <h1>Temp Dashboard </h1>
    </div>
  );
}
