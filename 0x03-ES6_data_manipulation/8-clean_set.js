export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const values = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      values.push(value.substring(startString.length));
    }
  }
  return values.join('-');
}
