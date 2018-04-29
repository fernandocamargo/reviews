import React from 'react';
import classnames from 'classnames';

import For from 'components/helpers/for';
import Review from 'components/review';

import './styles.css';

export default ({ label, results }) => (
  <div className={classnames('group', { all: !label })}>
    <h3 className="title">{label || 'All reviews'}</h3>
    <For each={results}>
      <Review />
    </For>
  </div>
);
