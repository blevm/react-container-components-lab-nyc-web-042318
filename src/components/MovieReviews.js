import React from 'react';

const MovieReviews = (props) => {
  MovieReviews.defaultProps = {reviews: props.reviews}

  const MovieList = props.reviews.map(review =>  (<div className="review"><a href={review.link.url} target="_blank">{review.headline}</a></div>))

  return (
    <div className="review-list">
      {MovieList}
    </div>
  )
}



export default MovieReviews;
