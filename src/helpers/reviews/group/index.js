import get from 'helpers/object/get';
import { scan, sort } from 'helpers/reviews';
import format from 'helpers/date/format';

export default reviews => ({
  with: props => (stack, [identifier, items]) => {
    const { settings: { grouping, sorting }, results } = props;
    const found = items
      .map(get(results.concat(reviews)))
      .filter(scan(props))
      .sort(sort('reviewCreated').by(sorting));
    const group = {
      label: !!identifier && format(identifier).as(grouping),
      results: found,
      identifier,
    };

    return !found.length ? stack : stack.concat(group);
  },
});
