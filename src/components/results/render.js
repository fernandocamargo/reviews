import React from 'react';
import Scroller from 'react-infinite-scroller';

import For from 'components/helpers/for';
import Group from 'components/group';
import Loading from 'components/loading';

import './styles.css';

export default ({ uuid, done, empty, groups, fetch }) => (
  <Scroller
    key={uuid}
    loadMore={fetch}
    hasMore={!done}
    loader={<Loading key="loading" />}
    className="results"
  >
    {empty && <p className="empty">No reviews found.</p>}
    <For each={groups}>
      <Group />
    </For>
  </Scroller>
);
