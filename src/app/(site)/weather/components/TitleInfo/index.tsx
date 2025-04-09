import { weatherStore } from "@/store/weatherStore";

export default function TitleInfo() {
  const { data } = weatherStore();
  if (!data) return <></>;

  return (
    <div className=" grid place-content-center p-10 text-center font-medium text-title lg:text-left xl:justify-start xl:text-xl">
      <div className=" text-xl xl:text-4xl">{data.resolvedAddress}</div>
      <div className=" text-4xl xl:text-8xl">
        {" "}
        {data.currentConditions.temp}°
      </div>
      <div className=" text-description">
        {data.currentConditions.conditions}
      </div>
      <div className=" flex justify-around xl:justify-start xl:space-x-20">
        <div> {data.days[0].temp}° </div>
        <div> {data.days[0].tempmin}° </div>
      </div>
    </div>
  );
}
