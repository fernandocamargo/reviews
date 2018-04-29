import moment from 'moment';

import get from 'helpers/date/get';

export default ({ settings: { grouping }, results, indexes }) => (
  stack = indexes,
  { reviewCreated },
  index,
) => {
  const date = moment(reviewCreated);
  const category = !grouping ? grouping : get(date).as(grouping);
  const current = stack[category] || [];
  const next = [...current, results.length + index];

  return Object.assign(stack, {
    [category]: next,
  });
};
