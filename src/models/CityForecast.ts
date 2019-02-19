export const AllowedIntervals = [0, 6, 12, 18];

export function MilitaryHourToAMPMFormat(hour: number) {
  if (hour === 0) return "12 am";
  if (hour < 10) return hour + " am";
  if (hour >= 10 && hour <= 12) return hour + " pm";
  if (hour > 12) return hour - 12 + " pm";
}

export interface HourForecast {
  interval: number;
  tempCelcius: number;
}

export interface CityForecast {
  name: string;
  country: string;
  hourIntervals: HourForecast[];
}

export interface ForecastState {
  cities: CityForecast[];
  hasError: boolean;
  lastSearchText: string;
}
