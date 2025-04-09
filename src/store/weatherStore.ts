import { create } from "zustand";
import type { IWeather } from "@/interface/IWeather";

export const weatherStore = create<{
  hoursId: number;
  dayId: number;
  data: IWeather | null;
  setData: (data: IWeather) => void;
}>(set => {
  let initialData = null;

  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("weatherData");
    initialData = savedData ? JSON.parse(savedData) : null;
  }

  return {
    hoursId: new Date().getHours(),
    dayId: 0,
    data: initialData,
    setData: data => {
      set({ data });
      if (typeof window !== "undefined") {
        localStorage.setItem("weatherData", JSON.stringify(data));
      }
    },
    setHoursId: hoursId => {
      set({ hoursId });
    },
    setDayId: hoursId => {
      set({ hoursId });
    },
  };
});
