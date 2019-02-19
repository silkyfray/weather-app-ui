import { CityForecast } from "../models/CityForecast";

export enum ForecastFetchType {
  FORECAST_FETCH_REQUESTED = "FORECAST_FETCH_REQUESTED",
  FORECAST_FETCH_SUCCEEDED = "FORECAST_FETCH_SUCCEEDED",
  FORECAST_FETCH_FAILED = "FORECAST_FETCH_FAILED"
}

export interface ForecastFetchAction {
  type: ForecastFetchType;
  name: string;
  cityForecast?: CityForecast;
  message?: string;
}
