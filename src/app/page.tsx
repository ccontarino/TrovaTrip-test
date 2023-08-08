"use client";
import { useEffect, useState } from "react";
import { getRecord, record } from "./services.ts/record.service";
import { BlobText } from "./helper/BlobText";
import dynamic from "next/dynamic";
import Skeleton from "./components/Skeleton/Skeleton";
import { Record } from "./interfaces/Record";

const DynamicText = dynamic(
  () => import("./components/TextSection/TextSection"),
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);
export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [textService, setTextService] = useState<string>("");

  const blobText = new BlobText(textService);

  const onChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const getRecordService = async () => {
    const response = await getRecord();
    setTextService(response.text);
  };

  useEffect(() => {
    getRecordService();
  }, []);

  return (
    <main className="flex flex-col items-center p-4 justify-between h-full gap-4   ">
      <div className="flex flex-col items-center w-full md:w-[600px] h-full  gap-4">
        <div className="flex gap-5 md:gap-20 ">
          <p className="flex-1 text-xl md:text-xl font-bold ">Search Text</p>
          <input
            onChange={onChange}
            className="flex-1 sm:rounded-sm rounded-md text-black"
          ></input>
        </div>
        <div className="h-full w-full">
          <div className="flex flex-col w-full h-full">
            <div className="text-white h-full ">
              {blobText.getArrayText().map((text, index) => (
                <DynamicText text={text} key={index} searchWords={searchText} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
