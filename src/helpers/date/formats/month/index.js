import moment from 'moment';

export default (year, month) =>
  moment()
    .year(year)
    .month(month)
    .format('MMMM, YYYY');
