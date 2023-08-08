"use client";
import Image from "next/image";
import ScrollView from "./components/ScrollView";
import { useEffect, useState, useRef } from "react";
import { record } from "./services.ts/record.service";
import { useOnScreen } from "./hooks/UseOnScreen";

export default function Home() {
  const [searchText, setSearchText] = useState([]);
  const text = record.text;
  function searchTextFunction() {
    const regexPattern = new RegExp(`\\b${searchText}\\b`, "i");
    console.log(text.match(regexPattern));
    return text.match(regexPattern);
  }

  // const elementRef = useRef(null);
  // const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    searchTextFunction();
  }, [searchText]);

  return (
    <main className="flex flex-col items-center justify-between p-4 pt-10 border-2 border-solid min-h-screen h-screen gap-4   ">
      <div className="flex flex-col items-center w-full md:w-[600px] h-full  gap-4">
        <div className="flex gap-5 md:gap-20 ">
          <span className="flex-1 text-xl md:text-xl font-bold ">
            Search Text
          </span>
          <input
            onChange={(e) => {
              if (e.target.value) {
                setSearchText(e.target.value);
              }
            }}
            className="flex-1 sm:rounded-sm rounded-md text-black"
          ></input>
        </div>
        <div className="flex self-start pl-5">
          <span>Matches: {searchText.length} </span>
          <span className="ml-2 text-xl font-bold"></span>
        </div>
        <div className="h-full w-full  p-6">
          {/* <ScrollView></ScrollView> */}
          <div className="flex flex-col justify-center w-full h-full break-words">
            <p className="text-white break-words overflow-scroll ">
              <span>{text}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
