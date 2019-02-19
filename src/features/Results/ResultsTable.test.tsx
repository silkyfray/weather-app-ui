import * as React from "react";
import { shallow, render } from "enzyme";
import ResultsTable from "./ResultsTable";
import { CityForecast } from "../../models/CityForecast";

const fakeRows: CityForecast[] = [
  {
    country: "GB",
    name: "London",
    hourIntervals: [
      {
        interval: 0,
        tempCelcius: 42
      },
      {
        interval: 6,
        tempCelcius: 12
      }
    ]
  },
  {
    country: "GB",
    name: "Manchester",
    hourIntervals: [
      {
        interval: 0,
        tempCelcius: 42
      },
      {
        interval: 6,
        tempCelcius: 12
      }
    ]
  }
];

it("renders number of rows and columns correctly", () => {
  const wrapper = render(<ResultsTable cities={fakeRows} />);
  expect(wrapper.children().find(".ResultTable__row").length).toBe(
    fakeRows.length
  );
  expect(
    wrapper
      .children()
      .find(".ResultTable__row")
      .first()
      .find(".ResultTable__col").length
  ).toBe(fakeRows[0].hourIntervals.length);
});
