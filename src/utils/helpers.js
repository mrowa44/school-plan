// eslint-disable-next-line import/prefer-default-export
export function formatGroupName(name) {
  return name
    .replace(/Lekarski\/16\//g, '')
    .replace(/Lek\/16\//g, '');
}
