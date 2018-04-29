export default ({ settings: { rating } }) => ({
  filteringByRating: stars => rating.includes(stars),
});
