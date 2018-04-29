import match from 'helpers/entries/match';

export default review => ({
  for: query =>
    Object.entries(review)
      .reduce(match(new RegExp(query, 'gi')), [])
      .some(Boolean),
});
