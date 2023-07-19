"use client";

import { LayoutDashboard, LucideLayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export const NavigationBar = () => {
  const showNavMobile = () => {
    const navMobile = document.getElementById("navbar-cta");
    navMobile!.classList.toggle("hidden");
  };

  const pathname = usePathname();
  const active = (path: string) => {
    return path === pathname
      ? "block py-2 pl-3 pr-4 text-center text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      : "block py-2 pl-3 pr-4 text-center text-gray-500 rounded md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 border border-gray-200 py-4 mt-2 mx-4 md:mx-16 sticky top-2 bg-gradient-to-tr from-gray-50/50 to-gray-100/80 drop-shadow-md backdrop-blur-md rounded-md z-10 overflow-hidden">
      <Link
        href="/"
        className=" font-bold md:hidden bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 bg-clip-text text-transparent text-xl"
      >
        U
      </Link>

      <div className="flex  flex-wrap items-center justify-between max-w-screen-xl">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium items-center rounded-lg md:p-0 md:flex-row md:space-x-6 md:mt-0">
            <li>
              <Link
                href="/"
                className=" font-bold bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 bg-clip-text text-transparent text-2xl"
              >
                U
              </Link>
            </li>

            <li>
              <Link href="/pricing" className={active("/pricing")}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/docs" className={active("/docs")}>
                Docs
              </Link>
            </li>
            <li>
              <Link href="/blog" className={active("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/changelog" className={active("/changelog")}>
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/about" className={active("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/discord" className={active("/discord")}>
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex">
        <Link
          href="/auth/sign-up"
          target="_blank"
          className="px-4 shadow-md shadow-black/20 py-2 text-sm  text-center text-white bg-gray-800 rounded-md hover:bg-gray-900 transition-all focus:ring-4 focus:outline-none focus:ring-gray-300 hidden md:block  dark:focus:ring-gray-800 duration-300"
        >
          <motion.div className=" flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M6.125 10.0625C5.60792 10.0625 5.0959 9.96065 4.61818 9.76278C4.14046 9.5649 3.7064 9.27486 3.34077 8.90923C2.97514 8.5436 2.6851 8.10954 2.48722 7.63182C2.28935 7.1541 2.1875 6.64208 2.1875 6.125C2.1875 5.60792 2.28935 5.0959 2.48722 4.61818C2.6851 4.14046 2.97514 3.7064 3.34077 3.34077C3.7064 2.97514 4.14046 2.6851 4.61818 2.48722C5.0959 2.28935 5.60792 2.1875 6.125 2.1875C7.16929 2.1875 8.17081 2.60234 8.90923 3.34077C9.64766 4.07919 10.0625 5.08071 10.0625 6.125C10.0625 7.16929 9.64766 8.17081 8.90923 8.90923C8.17081 9.64766 7.16929 10.0625 6.125 10.0625ZM6.125 18.8125C5.08071 18.8125 4.07919 18.3977 3.34077 17.6592C2.60234 16.9208 2.1875 15.9193 2.1875 14.875C2.1875 13.8307 2.60234 12.8292 3.34077 12.0908C4.07919 11.3523 5.08071 10.9375 6.125 10.9375C7.16929 10.9375 8.17081 11.3523 8.90923 12.0908C9.64766 12.8292 10.0625 13.8307 10.0625 14.875C10.0625 15.9193 9.64766 16.9208 8.90923 17.6592C8.17081 18.3977 7.16929 18.8125 6.125 18.8125ZM14.875 10.0625C14.3579 10.0625 13.8459 9.96065 13.3682 9.76278C12.8905 9.5649 12.4564 9.27486 12.0908 8.90923C11.7251 8.5436 11.4351 8.10954 11.2372 7.63182C11.0393 7.1541 10.9375 6.64208 10.9375 6.125C10.9375 5.60792 11.0393 5.0959 11.2372 4.61818C11.4351 4.14046 11.7251 3.7064 12.0908 3.34077C12.4564 2.97514 12.8905 2.6851 13.3682 2.48722C13.8459 2.28935 14.3579 2.1875 14.875 2.1875C15.9193 2.1875 16.9208 2.60234 17.6592 3.34077C18.3977 4.07919 18.8125 5.08071 18.8125 6.125C18.8125 7.16929 18.3977 8.17081 17.6592 8.90923C16.9208 9.64766 15.9193 10.0625 14.875 10.0625ZM14.875 18.8125C13.8307 18.8125 12.8292 18.3977 12.0908 17.6592C11.3523 16.9208 10.9375 15.9193 10.9375 14.875C10.9375 13.8307 11.3523 12.8292 12.0908 12.0908C12.8292 11.3523 13.8307 10.9375 14.875 10.9375C15.9193 10.9375 16.9208 11.3523 17.6592 12.0908C18.3977 12.8292 18.8125 13.8307 18.8125 14.875C18.8125 15.9193 18.3977 16.9208 17.6592 17.6592C16.9208 18.3977 15.9193 18.8125 14.875 18.8125Z"
                fill="#E8E8E8"
              />
            </svg>
            <motion.span className=" font-medium">Dashboard</motion.span>
          </motion.div>
        </Link>
        <button
          onClick={showNavMobile}
          type="button"
          className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
