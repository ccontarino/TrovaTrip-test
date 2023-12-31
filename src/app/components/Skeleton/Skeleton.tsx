import React from "react";

function Skeleton() {
  return (
    <div role="status" aria-busy className="animate-pulse">
      <div
        aria-busy
        className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div
        aria-busy
        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  w-full mb-2.5"
      ></div>
      <div
        aria-busy
        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
      ></div>
      <div
        aria-busy
        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"
      ></div>
      <div
        aria-busy
        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"
      ></div>
    </div>
  );
}

export default Skeleton;
