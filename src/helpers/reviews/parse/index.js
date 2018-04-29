import { catalogue, group, sort } from 'helpers/reviews';

export default props => ({ reviews, hasMore }) => {
  const { settings: { sorting } } = props;
  const indexes = reviews.reduce(catalogue(props), undefined);
  const groups = Object.entries(indexes)
    .reduce(group(reviews).with(props), [])
    .sort(sort('identifier').by(sorting));

  return {
    results: reviews,
    done: !hasMore,
    indexes,
    groups,
  };
};
