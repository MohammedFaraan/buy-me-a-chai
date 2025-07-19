"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const { data: session } = useSession();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  //  console.log(session)
  // if (!session) {
  //   return (
  //     <div className="text-black bg-white">
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   )
  // }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex items-center h-16 bg-slate-800 text-white ">
      <div className="flex flex-row items-center justify-between mx-5 w-full">
        <div className="flex items-center justify-center font-bold text-lg">
          <img src="tea.gif" alt="chai-gif" width={44} />
          <Link href="/">BuyMeAChai</Link>
        </div>
        <div>
          {/* <Link href="/">Home</Link> */}
          {session?.user?.email ? (
            <div className="flex gap-4">
              <div>
                <button
                  id="dropdownHoverButton"
                  
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setIsHovered(!isHovered)}
                  onBlur={() => {
                    setTimeout(() => {
                      setIsHovered(false);
                    }, 1000);
                  }}
                  // onMouseLeave={() => setIsHovered(false)}
                >
                  Welcome {session.user.name || session.user.email}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    ariaHidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownHover"
                  className={`z-10 absolute ${
                    isHovered ? "" : "hidden"
                  }  mt-3 right-5 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 [170px] dark:bg-gray-700`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/earnings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <div className="w-full bg-white h-[1px] mt-1"></div>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <button
                onClick={() => signOut()}
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Sign Out
              </button> */}
            </div>
          ) : (
            <Link
              href="/login"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
