export default property => item => {
  const value = item[property];

  return !isNaN(value) ? value : +value.split(',').join('');
};
