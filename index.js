'use strict';

const {keys} = Object;

module.exports = (obj, fields = []) => {
  let copy = {};
  keys(obj).filter(
    key => !fields.some(
      field => field === key
    )
  ).forEach(
    key => copy[key] = obj[key]
  );
  return copy;
};
