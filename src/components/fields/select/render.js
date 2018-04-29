import React from 'react';

export default ({ children, ...props }) => (
  <select {...props}>{children}</select>
);
