"use client"
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"


function Navbar() {
  const { data: session } = useSession()
  //  console.log(session)
  // if (session) {
  //   return (
  //     <div className="text-black bg-white">
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   )
  // }
  return (
    <div className="flex items-center h-16 bg-slate-800 text-white ">
      <div className="flex flex-row items-center justify-between mx-5 w-full">
        <div className="flex items-center justify-center font-bold text-lg">
          <img src="tea.gif" alt="chai-gif" width={44} />
          <Link href="/">BuyMeAChai</Link>
        </div>
        <div >
  {/* <Link href="/">Home</Link> */}
  {session?.user?.email ? (
    <button
      onClick={() => signOut()}
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
    >
      Sign Out
    </button>
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
