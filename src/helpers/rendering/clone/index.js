import { cloneElement } from 'react';

export default element => (props, key) =>
  cloneElement(element, {
    ...props,
    key: props.key || key,
  });
