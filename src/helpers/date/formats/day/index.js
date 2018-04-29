import moment from 'moment';

export default (year, day) =>
  moment()
    .year(year)
    .dayOfYear(day)
    .format('DD.MM.YYYY');
