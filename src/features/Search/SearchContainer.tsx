import * as React from "react";
import { Dispatch } from "redux";
import { ForecastFetchType, ForecastFetchAction } from "../../actions/forecast";
import { connect } from "react-redux";
import AppState from "../../models/AppState";
import "./SearchContainer.scss";

interface DispatchProps {
  requestForecast: any;
}

interface StateProps {
  hasError: boolean;
  lastSearchText: string;
}

type SearchContainerProps = StateProps & DispatchProps;

export interface SearchContainerState {
  searchText: string;
}

class SearchContainer extends React.Component<
  SearchContainerProps,
  SearchContainerState
> {
  constructor(props: SearchContainerProps) {
    super(props);

    this.state = { searchText: "" };
  }

  private handleInputChange = (e: any) => {
    this.setState({ searchText: e.target.value });
  };

  private handleButtonClick = () => {
    this.props.requestForecast(this.state.searchText);
  };

  public render() {
    const { hasError, lastSearchText } = this.props;
    const { searchText } = this.state;
    return (
      <div className="SearchContainer">
        <input
          placeholder="Search a city"
          value={searchText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>Search</button>
        <div className="SearchContainer__error">
          {hasError && `Could not find forecast for ${lastSearchText}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    hasError: state.forecast.hasError,
    lastSearchText: state.forecast.lastSearchText
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestForecast: (searchText: string) =>
    dispatch({
      type: ForecastFetchType.FORECAST_FETCH_REQUESTED,
      name: searchText
    } as ForecastFetchAction)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
