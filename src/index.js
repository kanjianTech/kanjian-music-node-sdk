const url = require('url');
const request = require('request-promise-native');

const { generateSig } = require('./util');

class Kanjian {
  constructor(appKey, appSecrect, serverHost) {
    this.appKey = appKey;
    this.appKey = appSecrect;
    this.serverHost = serverHost;
    this.token = null;
  }
  // 获取 Token
  token(deviceId, page, count) {
    const timestamp = new Date() * 1;
    const that = this;
    if (this.token === null) {
      const params = {
        app_key: that.token,
        timestamp,
      };
      const sig = generateSig(this.appKey, params);
      params.sig = sig;
    } else {

    }
    // if not self._token:
    //     params = {"app_key": self.app_key,
    //               "timestamp": now}
    //     sig = util.generate_sig(self.app_secret, **params)
    //     params.update(sig=sig)
    //     self._token = client.get(url, params)
    //     self._token["expires_at"] = now + self._token["expires_in"] * 1000

    // if "expires_at" in self._token and self._token["expires_at"] > now + 10 * 1000:
    //     params = {"app_key": self.app_key,
    //               "timestamp": now}
    //     sig = util.generate_sig(self.app_secret, **params)
    //     params.update(sig=sig)
    //     self._token = client.get(url, params)
    //     self._token["expires_at"] = now + self._token["expires_in"] * 1000

    return self._token["access_token"]
  }
  genreList(deviceId, page, count, genreId) {}
  albumListByGenre(deviceId, page, count, genreId) {}
  trackListByGenre(deviceId, page, count, genreId) {}
  artistList(deviceId, page, count) {}
  albumListByArtist(deviceId, page, count, artistId) {}
  trackListByArtist(deviceId, page, count, artistId) {}
  albumDetail(deviceId, albumId) {}
  trackListByAlbum(deviceId, page, count, albumId) {}
  trackDetail(deviceId, trackId) {}
  searchArtist(deviceId, page, count, keyword) {}
  searchTrack(deviceId, page, count, keyword) {}
}

module.exports = Kanjian;
