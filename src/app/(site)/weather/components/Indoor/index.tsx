import { weatherStore } from "@/store/weatherStore";
import IndoorItem from "./IndoorItem";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaWind } from "react-icons/fa";

export default function Indoor() {
  const { data } = weatherStore();
  if (!data) return <></>;

  return (
    <div className="">
      <IndoorItem
        icon={<FaTemperatureLow />}
        title="feelslike"
        description={`${data.currentConditions.feelslike} °`}
      />
      <IndoorItem
        icon={<FaCloudRain />}
        title="RainFall"
        description={`${data.currentConditions.precip} %`}
      />
      <IndoorItem
        icon={<FaWind />}
        title="Wind"
        description={`${data.currentConditions.windspeed} km/h`}
      />
    </div>
  );
}
