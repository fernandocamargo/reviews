import json from 'helpers/request/json';

export const getReviews = (page = 1) =>
  window.fetch(`/reviews/${page}`).then(json);
