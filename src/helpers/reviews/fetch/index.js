import parse from 'helpers/reviews/parse';

export default props => page => {
  const { provider, setResults } = props;

  return provider(page)
    .then(parse(props))
    .then(setResults)
    .catch(console.warn);
};
