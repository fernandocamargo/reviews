import { compose, withProps, withHandlers } from 'recompose';

import props from './props';
import * as handlers from './handlers';

export default compose(withProps(props), withHandlers(handlers));
