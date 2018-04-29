import React from 'react';
import classnames from 'classnames';

import './styles.css';

export default ({
  reviewId,
  stars,
  rating,
  title,
  content,
  date,
  childAsin,
  productTitle,
  productImg,
}) => (
  <div className="review">
    <h2 className="title">
      Review #{reviewId} of product #{childAsin}
    </h2>
    <div className="attributes">
      <figure className="attribute avatar">
        <img
          src={`https://m.media-amazon.com/images/I/${productImg}._AC_US60_SCLZZZZZZZ__.jpg`}
          alt={productTitle}
          title={productTitle}
        />
        <figcaption>{productTitle}</figcaption>
      </figure>
      <dl className="attribute date">
        <dt>Date</dt>
        <dd>{date}</dd>
      </dl>
      <dl className={classnames('attribute', 'rating', `rating-${stars}`)}>
        <dt>Stars</dt>
        <dd>{rating}</dd>
      </dl>
      <dl className="attribute product">
        <dt>Product</dt>
        <dd>{childAsin}</dd>
        <dd>{productTitle}</dd>
      </dl>
      <dl className="attribute content">
        <dt>Review</dt>
        <dd>
          <blockquote>
            <h4>{title}</h4>
            <p>{content}</p>
          </blockquote>
        </dd>
      </dl>
    </div>
  </div>
);
