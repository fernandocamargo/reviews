import compose from './composition';
import render from './render';
import * as statics from './statics';

export default compose(Object.assign(render, statics));
