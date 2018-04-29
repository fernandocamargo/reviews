import identity from 'helpers/object/identity';
import filter from 'helpers/collection/filter';
import not from 'helpers/lang/not';

export default ({ settings, setSettings }) => field => {
  const { name, value, checked } = field;
  const current = settings[name];
  const format = checked ? identity : filter(not(value));
  const next = !Array.isArray(current) ? value : format(current.concat(value));

  return setSettings({
    value: next,
    name,
  });
};
