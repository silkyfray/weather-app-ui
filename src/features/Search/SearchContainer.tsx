import * as React from "react";
import { Dispatch } from "redux";
import { ForecastFetchType, ForecastFetchAction } from "../../actions/forecast";
import { connect } from "react-redux";

interface DispatchProps {
  requestForecast: any;
}

type SearchContainerProps = DispatchProps;

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
    return (
      <div>
        <input
          placeholder="Search a city"
          value={this.state.searchText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>Search</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestForecast: (searchText: string) =>
    dispatch({
      type: ForecastFetchType.FORECAST_FETCH_REQUESTED,
      name: searchText
    } as ForecastFetchAction)
});

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
