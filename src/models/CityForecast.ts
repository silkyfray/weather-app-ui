export const AllowedIntervals = [0, 6, 12, 18];

export interface HourForecast {
  interval: number;
  tempCelcius: number;
}

export interface CityForecast {
  name: string;
  hourIntervals: HourForecast[];
}

export interface ForecastState {
  cities: CityForecast[];
}
