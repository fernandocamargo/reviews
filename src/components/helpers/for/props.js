import ensure from 'helpers/collection/ensure';
import clone from 'helpers/rendering/clone';

export default ({ each, children }) => ({
  iterator: ensure(each).map(clone(children)),
});
