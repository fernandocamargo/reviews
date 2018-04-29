import moment from 'moment';

export default ({ reviewId, reviewCreated, stars }) => ({
  date: moment(reviewCreated).format('DD.MM.YYYY'),
  rating: [stars, ' star', stars > 1 && 's'].filter(Boolean).join(''),
  key: reviewId,
});
