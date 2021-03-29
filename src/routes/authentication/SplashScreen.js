import React from "react";

export default function SplashScreen() {
  return (
    <div className="flex sm:mx-auto sm:w-full sm:max-w-md items-center justify-center h-screen">
      <img
        className="mx-auto h-26 w-auto m-2 p-4  justify-self-center"
        src={process.env.PUBLIC_URL + "/images/GOGear-logo-01-default.png "}
        alt="Workflow"
      />
    </div>
  );
}
