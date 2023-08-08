"use client";
import Image from "next/image";
import ScrollView from "./components/ScrollView";
import { useEffect, useState, useRef } from "react";
import { record } from "./services.ts/record.service";
import { BlobText } from "./helper/BlobText";
import TextSection from "./components/TextSection/TextSection";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const text = record.text;
  const blobText = new BlobText(text);

  return (
    <main className="flex flex-col items-center p-4 justify-between h-full gap-4   ">
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
        <div className="h-full w-full">
          {/* <ScrollView></ScrollView> */}
          <div className="flex flex-col w-full h-full">
            <div className="text-white h-full ">
              {blobText.getArrayText().map((text, index) => (
                <TextSection
                  text={text}
                  key={index}
                  searchWords={searchText}
                ></TextSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
