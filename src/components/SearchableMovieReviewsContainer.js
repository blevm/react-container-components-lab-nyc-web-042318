import React from 'react';

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

  render() {
    console.log(this.state.searchTerm)
    return(
      <div className="searchable-movie-reviews">
      <input type="text" placeholder="Search" onChange={this.handleChange}/>

      </div>
    )
  }

}

export default SearchableMovieReviews;
