/* eslint no-unused-vars: 0 */
const classnames = classes => (
  Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ')
);


export default classnames;
