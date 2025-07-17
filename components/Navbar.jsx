import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center h-16 bg-slate-800 text-white ">
      <div className="flex flex-row items-center justify-between mx-5 w-full">
        <div className="flex items-center justify-center font-bold text-lg">
          <img src="tea.gif" alt="chai-gif" width={44} />
          <Link href="/">BuyMeAChai</Link>
        </div>
        <div className="space-x-2">
          {/* <Link href="/">Home</Link> */}
          <Link
            href="/login"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Login
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default Navbar;
