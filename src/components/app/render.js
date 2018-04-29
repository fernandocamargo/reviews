import React from 'react';

import Reviews from 'components/reviews';
import * as API from 'api';

import './styles.css';

export default () => <Reviews provider={API.getReviews} />;
