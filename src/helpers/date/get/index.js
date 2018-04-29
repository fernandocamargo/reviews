import leading from 'helpers/date/leading';

export default date => {
  const day = leading(date.dayOfYear(), 3);
  const week = leading(date.week(), 2);
  const month = leading(date.month(), 2);
  const year = leading(date.year(), 4);

  return {
    as: type => {
      const formats = {
        day: [year, day],
        week: [year, week],
        month: [year, month],
      };

      return formats[type] || [+date];
    },
  };
};
