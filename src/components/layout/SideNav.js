import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/useAuth";

export default function SideNav() {
  const auth = useAuth();
  return (
    <ul className="flex flex-col bg-blue-500 justify-start text-white text-xl p-1 h-full ">
      <li>
        <Link className="p-2" to="/">
          Side nav
        </Link>
      </li>
      <li>
        <Link className="p-2" to="/">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="p-2" to="/accounthome">
          Account
        </Link>
      </li>
      <li>
        {!auth.user ? null : (
          <Link className="p-2" to="/" onClick={() => auth.signout()}>
            Sign out
          </Link>
        )}
      </li>
    </ul>
  );
}
