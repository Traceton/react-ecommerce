import React, { useState, useEffect } from "react";
import { useAuth } from "../../services/useAuth";
import GoGearMainLogo from "../../components/sharedUi/GoGearMainLogo";
import { getUserEmailFromLocalStorage } from "../../storage/LocalStorage";

export default function ForgotPassword() {
  const auth = useAuth();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    let getStoredEmail = async () => {
      let storedEmail = await getUserEmailFromLocalStorage();
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };
    getStoredEmail();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto h-26 w-auto m-2 p-4">
          <GoGearMainLogo />
        </div>
        <h2 className="m-2 p-4 mt-6 text-center text-3xl font-extrabold text-gray-900">
          Recover your password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={() => auth.signin(email)}
              >
                Send Confirmation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
