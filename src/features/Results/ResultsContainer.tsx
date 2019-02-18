import * as React from "react";
import { connect } from "react-redux";
import AppState from "../../models/AppState";
import { CityForecast } from "../../models/CityForecast";

interface StateProps {
  cities: CityForecast[];
}

type ResultsContainerProps = StateProps;

function ResultsContainer(props: ResultsContainerProps) {
  return (
    <div>
      <ul>
        {props.cities.map((city, index) => {
          return <li key={index}>{city.name}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    cities: state.forecast.cities
  };
};

export default connect(mapStateToProps)(ResultsContainer);
