const crypto = require('crypto');

/**
 * 通过私钥和参数生成 sig
 * @param {String} appSecret - 私钥
 * @param {Object} params - 参数
 */
const generateSig = (appSecret, params) => {
  // 将除了 sig 以外的所有请求参数的原始值按照参数名的字典序排序
  const paramsKeyValueArray = Object.keys(params).sort((a, b) => (a > b))
    .reduce((prev, key) => (prev.push([key, params[key]]) && prev), []);

  // 将排序后的参数键值对用 & 拼接，即拼成 key1=val1&key2=val2&...
  const paramsString = paramsKeyValueArray.map(([key, value]) => (`${key}=${value}`)).join('&');

  // 将第二步骤得到的字符串进行 Base64 编码
  const paramsBase64String = Buffer.from(paramsString, 'utf8').toString('base64');

  // 将 appSecret 作为哈希 key 对第三步骤得到的 Base64 编码后的字符串进行 HMAC-SHA1 哈希运算得到字节数组
  const paramsSha1Buffer = crypto.createHmac('sha1', appSecret).update(paramsBase64String).digest();

  // 对第四步骤得到的字节数组进行 MD5 运算得到 32 位字符串，即为 sig
  return crypto.createHash('md5').update(paramsSha1Buffer).digest('hex');
};

exports.generateSig = generateSig;
