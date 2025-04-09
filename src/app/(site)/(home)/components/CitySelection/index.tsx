"use client";
import { useEffect, useState } from "react";
import { weatherStore } from "@/store/weatherStore";
import { useWeather } from "@/hooks/useWether";
import Form from "next/form";

export default function CitySelection() {
  const [cityName, setCityName] = useState("");
  const { setData } = weatherStore();

  const { data, isLoading, isError, error } = useWeather(cityName);

  useEffect(() => {
    if (data && data !== null) {
      setData(data);
    }
  }, [data, setData]);

  return (
    <Form
      className=" grid space-y-6 rounded-2xl border-border border-t-2 bg-gradient-to-r from-gradientFrom to-gradientTo p-10 text-center backdrop-blur-sm"
      action={"/weather"}
    >
      <div className="text-title">
        {data && data !== null ? data.resolvedAddress : "Enter city"}
      </div>
      <input
        type="text"
        maxLength={20}
        value={cityName}
        onChange={e => setCityName(e.target.value)}
        className="rounded-2xl border-2 border-border bg-input p-2 px-4 drop-shadow-2xl placeholder:italic"
        placeholder="City name"
      />
      {data && data !== null && (
        <button
          type="submit"
          className="rounded-2xl border-2 border-border bg-secondary p-2 px-4 drop-shadow-2xl duration-300 placeholder:italic hover:scale-105 hover:bg-primary"
        >
          Check the weather
        </button>
      )}
      {isLoading && <p className=" taxt-primary animate-pulse">Loading...</p>}
      {isError && <p className=" text-destructive">Error: {error.message}</p>}
    </Form>
  );
}
