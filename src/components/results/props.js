export default ({ done, groups: { length } }) => ({
  empty: done && !length,
});
