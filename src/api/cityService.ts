import axios from "axios";
import { OwmWeatherResponse } from "./types/OwmResponse";

export async function FetchCity24HourForecast(cityName: string) {
  console.log(cityName);
  const res = await axios.get<OwmWeatherResponse>(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&apikey=886705b4c1182eb1c69f28eb8c520e20`
  );

  return res.data;
}
