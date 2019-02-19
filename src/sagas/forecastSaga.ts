import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { FetchCity24HourForecast } from "../api/cityService";
import { ForecastFetchType, ForecastFetchAction } from "../actions/forecast";
import { OwnWeatherResponse as OwmWeatherResponse } from "../api/types/OwmResponse";
import { AllowedIntervals, CityForecast } from "../models/CityForecast";

function owmResponseToCityForecast(owmResponse: OwmWeatherResponse) {
  const result: CityForecast = {
    name: owmResponse.city.name,
    country: owmResponse.city.country,
    // TODO: remove duplication
    hourIntervals: owmResponse.list
      .filter(weatherParam => {
        const hours = new Date(weatherParam.dt_txt).getHours();
        // check forecast time is one that we are interested in
        return (
          AllowedIntervals.find(interval => interval === hours) || hours === 0
        );
      })
      .map(filteredWeatherParam => {
        const time = new Date(filteredWeatherParam.dt_txt);
        // take the average temp between min and max
        return {
          tempCelcius:
            (filteredWeatherParam.main.temp_max +
              filteredWeatherParam.main.temp_min) /
            2,
          interval: time.getHours()
        };
      })
      // sort ascending
      .sort((w1, w2) =>
        w1.interval < w2.interval ? -1 : w1.interval === w2.interval ? 0 : 1
      )
  };
  console.log(result);
  return result;
}

function* FetchCityForecast(action: ForecastFetchAction) {
  try {
    const ownResponse: OwmWeatherResponse = yield call(
      FetchCity24HourForecast,
      action.name
    );
    const cityForecast = owmResponseToCityForecast(ownResponse);
    yield put({
      type: ForecastFetchType.FORECAST_FETCH_SUCCEEDED,
      cityForecast
    } as ForecastFetchAction);
  } catch (e) {
    yield put({
      type: ForecastFetchType.FORECAST_FETCH_FAILED,
      message: e.message
    });
  }
}

export default function* forecastSaga() {
  yield takeEvery(
    ForecastFetchType.FORECAST_FETCH_REQUESTED,
    FetchCityForecast
  );
}
