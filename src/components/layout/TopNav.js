import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
export default function TopNav() {
  const auth = useAuth();

  return (
    <ul className="flex bg-blue-400 justify-end text-white text-xl p-1 ">
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

    // <nav class="bg-gray-800">
    //   <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div class="relative flex items-center justify-between h-16">
    //       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         {auth.user ? (
    //           <Link className="text-white" to="/">
    //             test Dashboard link
    //           </Link>
    //         ) : null}
    //         <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //           <span class="sr-only">View notifications</span>
    //           <svg
    //             class="h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //             />
    //           </svg>
    //         </button>
    //         <div class="ml-3 relative">
    //           <div>
    //             <button
    //               type="button"
    //               class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //               id="user-menu"
    //               aria-expanded="false"
    //               aria-haspopup="true"
    //             >
    //               <span class="sr-only">Open user menu</span>
    //               {auth.user ? (
    //                 <Link to="/userhome">
    //                   <img
    //                     class="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   ></img>
    //                 </Link>
    //               ) : (
    //                 <Link to="/signin">
    //                   <img
    //                     class="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   ></img>
    //                 </Link>
    //               )}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="sm:hidden" id="mobile-menu">
    //     <div class="px-2 pt-2 pb-3 space-y-1">
    //       <a
    //         href="/"
    //         class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Dashboard
    //       </a>
    //       <a
    //         href="/userhome"
    //         class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Account
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}
