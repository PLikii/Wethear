import { weatherStore } from "@/store/weatherStore";
import { iconsMap } from "@/lib/iconsMap";

export default function HoursItem({ id }) {
  const { data, hoursId, dayId } = weatherStore();
  if (!data) return <></>;

  const hours = data.days[dayId].hours[id];

  const formatTime = (time: string) => {
    let [hours] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 → 12, 13 → 1
    return `${hours} ${period}`;
  };

  const { snowdepth, precipprob, cloudcover, sunriseEpoch, datetimeEpoch } =
    hours;

  const icon =
    snowdepth > 0.4
      ? iconsMap.snow
      : precipprob > 50
        ? iconsMap.rain
        : cloudcover > 50
          ? iconsMap.cloudy
          : sunriseEpoch && datetimeEpoch > sunriseEpoch
            ? iconsMap.day
            : iconsMap.night;

  return (
    <div
      className={`flex min-h-36 min-w-20 flex-col items-center justify-between rounded-full border border-cardBorder bg-card py-4 text-center text-title backdrop-blur-sm xl:snap-center xl:snap-always ${hoursId === id ? "bg-secondary" : "bg-card"} hover:-translate-y-2 duration-300 hover:scale-105`}
    >
      <div>{hoursId === id ? "Now" : formatTime(hours.datetime)}</div>
      <div className=" size-8">{icon}</div>
      <div>{hours.precip * 100}%</div>
      <div>{hours.temp}°</div>
    </div>
  );
}
