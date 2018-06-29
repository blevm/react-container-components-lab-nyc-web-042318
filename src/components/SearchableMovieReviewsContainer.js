import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const api_key_string = `&api-key=${NYT_API_KEY}`;


class SearchableMovieReviews extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  performSearch = (event) => {
    event.preventDefault()
    console.log(event)

    fetch(`${BASE_URL}${this.state.searchTerm}${api_key_string}`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <input type="text" placeholder="Search" onChange={this.handleChange}/>
        <button type="submit" onClick={this.performSearch}>Submit</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviews;
