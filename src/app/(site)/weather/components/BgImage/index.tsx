import { weatherStore } from "@/store/weatherStore";
import { imageMap } from "@/lib/imageMap";

export default function BgImage({ children }) {
  const { data } = weatherStore();
  if (!data) return <></>;

  const { snowdepth, precipprob, cloudcover, sunriseEpoch, datetimeEpoch } =
    data.currentConditions;

  const image =
    snowdepth > 0.4
      ? imageMap.snow
      : precipprob > 50
        ? imageMap.rain
        : cloudcover > 50
          ? imageMap.cloudy
          : sunriseEpoch && datetimeEpoch > sunriseEpoch
            ? imageMap.day
            : imageMap.night;

  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
