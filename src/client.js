const URL = require('url');
const request = require('request-promise-native');

const get = async (url, params) => {
  const paramsString = new URL.URLSearchParams(params).toString();
  return request.get(`${url}?${paramsString}`).then(response => JSON.parse(response));
};

module.exports = {
  get,
};
