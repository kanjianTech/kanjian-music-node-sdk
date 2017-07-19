const { URLSearchParams } = require('url');
const request = require('request-promise-native');

const get = async (url, params) => {
  const paramsString = new URLSearchParams(params).toString();
  return request.get(`${url}?${paramsString}`).then(response => JSON.parse(response));
};

module.exports = {
  get,
};
