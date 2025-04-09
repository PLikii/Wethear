import { env } from "@/env";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  const API_KEY = env.API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const city = params.city;

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 },
    );
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)},uk?unitGroup=metric&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            "Could not find the city, check if the name is entered correctly",
        },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 },
    );
  }
}
