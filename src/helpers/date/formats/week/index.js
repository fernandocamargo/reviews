import moment from 'moment';

export default (year, week) => {
  const date = moment()
    .year(year)
    .week(week);
  const start = date.startOf('week').format('DD.MM.YYYY');
  const end = date.endOf('week').format('DD.MM.YYYY');

  return `${start} - ${end}`;
};
