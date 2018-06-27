import React from 'react';

const MovieReviews = (props) => {
  MovieReviews.defaultProps = {reviews: props.reviews}

  const MovieList = props.reviews.map(review =>  (<div className="review">{review.display_name}</div>))

  return (
    <div className="review-list">
      {MovieList}
    </div>
  )
}



export default MovieReviews;
