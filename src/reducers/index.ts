import { combineReducers } from "redux";
import AppState from "../models/AppState";
import { forecastReducer } from "./forecast";

export const rootReducer = combineReducers<AppState>({
  forecast: forecastReducer
});
