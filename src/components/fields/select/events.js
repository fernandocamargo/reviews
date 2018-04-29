import noop from 'helpers/function/noop';

export default {
  componentDidUpdate() {
    const { props: { name, disabled, onChange } } = this;
    const handler = disabled ? onChange : noop;

    return handler({ target: { value: '', name } });
  },
};
