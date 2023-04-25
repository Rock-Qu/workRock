import React from "react";

export default function Header() {
     
    return (
        <header className="w-full flex items-center justify-center h-14 px-5 dark:bg-stone-100 dark:text-white border-b border-solid border-gray-300">
        <section className="max-w-7xl w-full flex items-center justify-between">
          <h1 className="text-2xl font-right">
         </h1>
          <div className="username">My Account</div>
        </section>
      </header>
    )

}