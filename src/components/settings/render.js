import React from 'react';
import classnames from 'classnames';

import Select from 'components/fields/select';

import './styles.css';

export default ({
  settings: { query, grouping, sorting },
  filteringByRating,
  enabled,
  update,
  refresh,
}) => (
  <form
    className={classnames('form', 'settings', { enabled })}
    onSubmit={refresh}
  >
    <fieldset disabled={!enabled}>
      <legend className="title">Search tools:</legend>
      <div className="fields">
        <div className="field query">
          <label htmlFor="query">Search for keywords:</label>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Search"
            onChange={update}
            value={query}
          />
        </div>
        <div className="field grouping">
          <label htmlFor="grouping">Group by:</label>
          <Select
            name="grouping"
            id="grouping"
            onChange={update}
            value={grouping}
          >
            <option value="">{grouping ? 'Do not group' : 'Group by'}</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </Select>
        </div>
        <div className="field sorting">
          <label htmlFor="sorting">Order by:</label>
          <Select
            name="sorting"
            id="sorting"
            onChange={update}
            value={sorting}
            disabled={!grouping}
          >
            <option value="" disabled hidden>
              Order by
            </option>
            <option value="asc">Older reviews first</option>
            <option value="desc">Latest reviews first</option>
          </Select>
        </div>
        <fieldset className="field rating">
          <legend className="title">Filter by:</legend>
          <div className="options">
            <div className="option rating rating-1">
              <input
                type="checkbox"
                name="rating"
                id="rating-1"
                value="1"
                onChange={update}
                checked={filteringByRating('1')}
              />
              <label htmlFor="rating-1">
                <strong>1</strong>
                <em>star</em>
              </label>
            </div>
            <div className="option rating rating-2">
              <input
                type="checkbox"
                name="rating"
                id="rating-2"
                value="2"
                onChange={update}
                checked={filteringByRating('2')}
              />
              <label htmlFor="rating-2">
                <strong>2</strong>
                <em>stars</em>
              </label>
            </div>
            <div className="option rating rating-3">
              <input
                type="checkbox"
                name="rating"
                id="rating-3"
                value="3"
                onChange={update}
                checked={filteringByRating('3')}
              />
              <label htmlFor="rating-3">
                <strong>3</strong>
                <em>stars</em>
              </label>
            </div>
            <div className="option rating rating-4">
              <input
                type="checkbox"
                name="rating"
                id="rating-4"
                value="4"
                onChange={update}
                checked={filteringByRating('4')}
              />
              <label htmlFor="rating-4">
                <strong>4</strong>
                <em>stars</em>
              </label>
            </div>
            <div className="option rating rating-5">
              <input
                type="checkbox"
                name="rating"
                id="rating-5"
                value="5"
                onChange={update}
                checked={filteringByRating('5')}
              />
              <label htmlFor="rating-5">
                <strong>5</strong>
                <em>stars</em>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="control submit">
        <button type="submit">Refresh</button>
      </div>
    </fieldset>
  </form>
);
