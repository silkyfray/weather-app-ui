import * as React from "react";
import {
  CityForecast,
  AllowedIntervals,
  MilitaryHourToAMPMFormat
} from "../../models/CityForecast";
import "./ResultsTable.scss";

interface ResultsTableProps {
  cities: CityForecast[];
}

const ResultsTable: React.FunctionComponent<ResultsTableProps> = props => {
  return (
    <table className="ResultTable">
      <thead>
        <tr>
          <th>Cities</th>
          {AllowedIntervals.map((interval, index) => {
            return <th key={index}>{MilitaryHourToAMPMFormat(interval)}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.cities.map((city, index) => {
          return (
            <tr key={index} className="ResultTable__row">
              <th>
                {city.name}
                {","}
                {city.country}
              </th>
              {city.hourIntervals.map((hour, index) => {
                return (
                  <td key={index} className="ResultTable__col">
                    {Math.trunc(hour.tempCelcius)}
                    {" C"}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
