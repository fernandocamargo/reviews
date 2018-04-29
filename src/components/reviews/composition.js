import { compose, withStateHandlers, withProps } from 'recompose';

import state from './initial-state';
import * as reducers from './reducers';
import props from './props';

export default compose(withStateHandlers(state, reducers), withProps(props));
