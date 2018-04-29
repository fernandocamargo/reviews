export const update = ({ set }) => ({ target }) => set(target);

export const refresh = ({ settings, resetResults }) => event => {
  event.preventDefault();
  resetResults();
};
