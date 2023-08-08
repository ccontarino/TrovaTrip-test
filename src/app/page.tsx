"use client";
import Image from "next/image";
import ScrollView from "./components/ScrollView";
import { useEffect, useState } from "react";

export default function Home() {
  const text =
    "The world environment is facing numerous challenges, including climate change, deforestation, pollution, and loss of biodiversity. These issues are not only affecting the planet's ecosystems but also human health and well-being. Governments and international organizations are working to address these challenges, such as through the United Nations Framework Convention on Climate Change and the Paris Agreement. However, individual actions are also crucial in protecting the world environment, such as reducing energy consumption, recycling, and supporting sustainable businesses. It is essential to take urgent and collective action to preserve the planet's natural resources and ensure a sustainable future for generations to come";
  const [searchText, setSearchText] = useState([]);

  function searchTextFunction() {
    const regexPattern = new RegExp(`\\b${searchText}\\b`, "i");
    console.log(text.match(regexPattern));
  }

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
          <span>Matches: {searchText} </span>
          <span className="ml-2 text-xl font-bold"></span>
        </div>
        <div className="h-full w-full  p-6">
          {/* <ScrollView></ScrollView> */}
          <div className="flex flex-col justify-center w-full break-words">
            <span className="text-white break-words ">{text}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
