export default () => ({
  settings: {
    query: '',
    grouping: '',
    sorting: '',
    rating: [],
  },
  uuid: new Date().getTime(),
  enabled: false,
  done: false,
  results: [],
  indexes: {},
  groups: [],
});
