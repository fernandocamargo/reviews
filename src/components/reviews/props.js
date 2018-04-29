import * as reviews from 'helpers/reviews';
import * as settings from 'helpers/settings';

export default props => ({
  fetch: reviews.fetch(props),
  set: settings.set(props),
});
