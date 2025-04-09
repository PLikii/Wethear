export interface IWeather {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: CurrentConditions[];
  alerts: [];
  currentConditions: CurrentConditions;
}

interface CurrentConditions {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: Conditions;
  icon: Icon;
  stations: string[] | null;
  source: Source;
  sunrise?: string;
  sunriseEpoch?: number;
  sunset?: string;
  sunsetEpoch?: number;
  moonphase?: number;
  tempmax?: number;
  tempmin?: number;
  feelslikemax?: number;
  feelslikemin?: number;
  precipcover?: number;
  description?: string;
  hours: CurrentConditions[];
}

enum Conditions {
  Clear = "Clear",
  PartiallyCloudy = "Partially cloudy",
}

enum Icon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
}

enum Source {
  Comb = "comb",
  Fcst = "fcst",
  Obs = "obs",
}
