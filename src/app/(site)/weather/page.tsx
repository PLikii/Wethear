"use client";
import BgImage from "./components/BgImage";
import ChartsTemp from "./components/ChartsTemp";
import Hours from "./components/Hours";
import Indoor from "./components/Indoor";
import TitleInfo from "./components/TitleInfo";

export default function Sity() {
  return (
    <div className=" relative min-h-screen ">
      <BgImage>
        <TitleInfo />
        <div className=" gap-10 2xl:grid 2xl:grid-cols-2">
          <Hours />
          <Indoor />
          <ChartsTemp />
        </div>
      </BgImage>
    </div>
  );
}
