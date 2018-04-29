import search from 'helpers/reviews/search';

export default props => review => {
  const { settings: { query, rating } } = props;
  const { stars } = review;

  return [
    !rating.length || rating.includes(String(stars)),
    !String(query).trim() || search(review).for(query),
  ].every(Boolean);
};
