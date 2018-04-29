import moment from 'moment';

export default date => moment(+date).format('LLL');
