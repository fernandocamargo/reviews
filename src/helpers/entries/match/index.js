export default pattern => (assertions, [attribute, value]) =>
  assertions.concat(!!String(value).match(pattern));
