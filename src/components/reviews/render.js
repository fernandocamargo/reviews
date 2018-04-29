import React from 'react';

import Settings from 'components/settings';
import Results from 'components/results';

import './styles.css';

export default props => (
  <div className="reviews">
    <h1 className="title">Reviews</h1>
    <Settings {...props} />
    <Results {...props} />
  </div>
);
