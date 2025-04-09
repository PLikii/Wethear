"use client";
import { useQuery } from "@tanstack/react-query";

const fetchWeather = async city => {
  if (!city) throw new Error("City name is required");

  const res = await fetch(`/api/weather/${encodeURIComponent(city)}`);

  if (!res.ok) throw new Error("Check the city name");

  return res.json();
};

export const useWeather = city => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });
};
