import { compose, lifecycle } from 'recompose';

import events from './events';

export default compose(lifecycle(events));
