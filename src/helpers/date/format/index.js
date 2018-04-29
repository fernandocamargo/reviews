import * as formats from 'helpers/date/formats';

export default identifier => ({
  as: type => {
    const fragments = identifier.split(',');
    const format = formats[type || 'full'];

    return format(...fragments);
  },
});
