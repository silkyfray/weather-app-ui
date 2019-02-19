import * as React from "react";
import { connect } from "react-redux";
import AppState from "../../models/AppState";
import { CityForecast } from "../../models/CityForecast";
import ResultsTable from "./ResultsTable";

interface StateProps {
  cities: CityForecast[];
}

type ResultsContainerProps = StateProps;

function ResultsContainer(props: ResultsContainerProps) {
  return (
    <div>
      <ResultsTable cities={props.cities} />
    </div>
  );
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    cities: state.forecast.cities
  };
};

export default connect(mapStateToProps)(ResultsContainer);
