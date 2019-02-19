import { Reducer } from "redux";
import { ForecastState } from "../models/CityForecast";
import { ForecastFetchAction, ForecastFetchType } from "../actions/forecast";

const initialState: ForecastState = {
  cities: []
};

export const forecastReducer: Reducer<ForecastState, ForecastFetchAction> = (
  state = initialState,
  action: ForecastFetchAction
) => {
  //make a copy of the state
  switch (action.type) {
    case ForecastFetchType.FORECAST_FETCH_SUCCEEDED:
      if (action.cityForecast) {
        const cityAndCountry =
          action.cityForecast.name + action.cityForecast.country;
        // remove city if already there
        let cities = state.cities.filter(
          city => city.name + city.country !== cityAndCountry
        );
        // prepend so it display at top
        cities.unshift(action.cityForecast);
        return { cities };
      }

    case ForecastFetchType.FORECAST_FETCH_REQUESTED:
    case ForecastFetchType.FORECAST_FETCH_FAILED:
    default:
      return state;
  }
};
