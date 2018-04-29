import update from 'immutability-helper';

export const setSettings = state => ({ name, value }) =>
  update(state, {
    settings: {
      [name]: { $set: value },
    },
  });

export const setResults = state => ({ results, done, indexes, groups }) =>
  update(state, {
    enabled: { $set: true },
    done: { $set: done },
    results: { $push: results },
    indexes: { $set: indexes },
    groups: { $set: groups },
  });

export const resetResults = state => () =>
  update(state, {
    uuid: { $set: new Date().getTime() },
    done: { $set: false },
    results: { $set: [] },
    indexes: { $set: {} },
    groups: { $set: [] },
  });
