import React from "react";
import Movie from "./Movie";
import "./Movie.css";

class Detail extends React.Component {
  componentDidMount() {
    const { match, location, history } = this.props;

    console.log(match);
    console.log(location);
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    console.log(state);
    if (state) {
      return (
        <div className="movies">
          <Movie
            year={state.year}
            title={state.title}
            summary={state.summary}
            poster={state.poster}
            genres={state.genres}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
