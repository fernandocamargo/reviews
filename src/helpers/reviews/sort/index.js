import cast from 'helpers/reviews/cast';

export default criteria => ({
  by: order => (previous, next) => {
    const format = cast(criteria);

    switch (true) {
      case order === 'asc':
        return format(previous) - format(next);
      case order === 'desc':
        return format(next) - format(previous);
      default:
        return 0;
    }
  },
});
