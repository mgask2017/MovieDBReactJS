import React, { Component } from "react";
import Movie from "./Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=fa1e27d0c9a59b67a4a9e0fa8b792d31"
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (err) {
      console.log(err, "api not connected - error occured!");
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1 className="App">Movie Database</h1>
          </header>
          <Route path="/test" component={Test} />
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => <h1>TEST</h1>;
