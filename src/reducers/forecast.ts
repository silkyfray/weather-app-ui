import { Reducer } from "redux";
import { ForecastState } from "../models/CityForecast";
import { ForecastFetchAction, ForecastFetchType } from "../actions/forecast";

const initialState: ForecastState = {
  cities: [],
  hasError: false,
  lastSearchText: ""
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
        // prepend so it displays at top
        cities.unshift(action.cityForecast);
        return { ...state, cities };
      }

    case ForecastFetchType.FORECAST_FETCH_FAILED:
      return { ...state, hasError: true, lastSearchText: action.name };
    case ForecastFetchType.FORECAST_FETCH_REQUESTED:
      return { ...state, hasError: false, lastSearchText: action.name };
    default:
      return state;
  }
};
