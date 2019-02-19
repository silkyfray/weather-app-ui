import { call, put, take } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { OwmWeatherResponse } from "../api/types/OwmResponse";
import * as fakeForecastJson from "./fakeForecast.json";
import forecastSaga, {
  FetchCityForecast,
  owmResponseToCityForecast
} from "./forecastSaga";
import { ForecastFetchAction, ForecastFetchType } from "../actions/forecast";

it("fetches city forecast", () => {
  const fakeForecastResponse: OwmWeatherResponse = fakeForecastJson;
  const action: ForecastFetchAction = {
    type: ForecastFetchType.FORECAST_FETCH_REQUESTED,
    name: "London"
  };
  const gen = FetchCityForecast(action);
  gen.next();
  // api call
  const response = gen.next(fakeForecastResponse);
  expect(response.value).toEqual(
    put({
      type: ForecastFetchType.FORECAST_FETCH_SUCCEEDED,
      cityForecast: owmResponseToCityForecast(fakeForecastResponse)
    })
  );
  // end
  expect(gen.next().done).toBe(true);
});
